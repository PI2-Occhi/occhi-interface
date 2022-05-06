import React, { useState, useEffect } from 'react';
import {
  Container,
  Header,
  Icon,
  Title,
  BluetoothContainer,
  Message,
  Fields,
  Item,
} from './styles';
import { Button } from '../../components/Button';
import { SENSORS_SERVICE, CONTROL_SERVICE } from '../../global/constants';
import { Alert, FlatList, Platform, PermissionsAndroid, TouchableHighlight} from 'react-native'
import { stringToBytes } from 'convert-string';

export default function BluetoothConnection({
  BleManager, bleEmitter, handleNewData, command,
}) {
  const [isScanning, setIsScanning] = useState(false);
  const [list, setList] = useState([]);
  const peripherals = new Map();
  const [currentDevice, setCurrentDevice] = useState('');

  // scans for ble devices
  const startScan = () => {
    if (isScanning) {
      return;
    }

    peripherals.clear();
    setList(Array.from(peripherals.values()));

    BleManager.scan([], 20, true)
      .then(() => {
        console.log('Scanning...');
        setIsScanning(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // execute for every device found
  const handleDiscoverPeripheral = (peripheral) => {
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }

    peripherals.set(peripheral.id, peripheral);
    setList(Array.from(peripherals.values()));
  };

  // handle stop scan event
  const handleStopScan = () => {
    setIsScanning(false);
  };

  const handleDisconnectedPeripheral = (data) => {
    const peripheral = peripherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      setList(Array.from(peripherals.values()));
    }
  };

  // updates info for connected device
  const updatePeripheral = (peripheral, callback) => {
    let p = peripherals.get(peripheral.id);
    if (!p) {
      return;
    }

    p = callback(p);
    peripherals.set(peripheral.id, p);
    setList(Array.from(peripherals.values()));
  };

  // gets the device name
  const getPeripheralName = (item) => {
    if (item.advertising) {
      if (item.advertising.localName) {
        return item.advertising.localName;
      }
    }
    return item.name;
  };

  const connectToDevice = (peripheral) => {
    // connects to the selected ble device

    Alert.alert('Sucesso', 'Conectado');
    if (!peripheral) {
      return;
    }

    if (peripheral.connected) {
      BleManager.disconnect(peripheral.id);
      return;
    }

    BleManager.connect(peripheral.id)
      .then(() => {
        console.log(`Connected to ${peripheral.id}`, peripheral);

        setCurrentDevice(peripheral.id);

        updatePeripheral(peripheral, (p) => {
          p.connected = true;
          return p;
        });

        BleManager.retrieveServices(peripheral.id).then(() => {
          BleManager.readRSSI(peripheral.id).then((rssi) => {
            updatePeripheral(peripheral, (p) => {
              p.rssi = rssi;
              return p;
            });
          });
        });

        // subscribing to notifications for all sensor characteristics
        SENSORS_SERVICE.CHARACTERISTICS.forEach((characteristic) => {
          BleManager.startNotification(peripheral.id, SENSORS_SERVICE.SERVICE_UUID, characteristic.UUID)
            .then((res) => {
              console.log('Subscribed to characteristic', res);
            });
        });
      }).catch((error) => {
        console.log('Connection error', error);
      });
  };

  useEffect(() => {
    const payload = command;
    const payloadBytes = stringToBytes(payload);

    MOVEMENT_CHAR_UUID = CONTROL_SERVICE.CHARACTERISTICS[0].UUID;

    BleManager.write(currentDevice, CONTROL_SERVICE.SERVICE_UUID, MOVEMENT_CHAR_UUID, payloadBytes)
      .then(() => {
        console.log('Sent movement command:', payload);
      }).catch((error) => {
        console.log('BLE err', error);
      });
  }, [command]);

  useEffect(() => {
    BleManager.start({ showAlert: false });

    // For each BLE event, a specific funcion is executed
    bleEmitter.addListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral);
    bleEmitter.addListener('BleManagerStopScan', handleStopScan);
    bleEmitter.addListener('BleManagerDisconnectPeripheral', handleDisconnectedPeripheral);
    bleEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', handleNewData);

    // Permission checking
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((r1) => {
        if (r1) {
          console.log('Phone has permission');
          return;
        }
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((r2) => {
          if (r2) {
            console.log('Permission accepted');
            return;
          }
          console.log('No permissions');
        });
      });
    }
  }, []);

  const renderItem = (item) => (
    <TouchableHighlight onPress={() => connectToDevice(item)}>
      <Item>
        {getPeripheralName(item)}
      </Item>
    </TouchableHighlight>
  );

  return (
    <Container>
      <Header>
        <Icon name="bluetooth" />
        <Title>Conexão</Title>
      </Header>
      <BluetoothContainer>
        <Message>
          Conecte seu celular com o bluetooth da Cadeira OCCHI
        </Message>
        <Button title="Scan Bluetooth Devices" onPress={() => startScan()} />
        <Fields>
          <FlatList
            data={list}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item) => item.id}
          />
        </Fields>
      </BluetoothContainer>
    </Container>
  );
}
