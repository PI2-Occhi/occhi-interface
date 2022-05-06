import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, NativeModules, NativeEventEmitter } from 'react-native';
import { useTheme } from 'styled-components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Buffer } from 'buffer';
import BleManager from 'react-native-ble-manager';
import { Warnings } from '../screens/Warnings';
import BluetoothConnection from '../screens/BluetoothConnection';
import { Tutorial } from '../screens/Tutorial';
import { ControlInterface } from '../screens/ControlInterface';
import { SENSORS_SERVICE } from '../global/constants'

const { Navigator, Screen } = createBottomTabNavigator();

const BleManagerModule = NativeModules.BleManager;
const bleEmitter = new NativeEventEmitter(BleManagerModule);

export function AppRoutes() {
  const [alerts, setAlerts] = useState([]);
  const [command, setCommand] = useState('');

  const handleNewData = (data) => {
    let sensor = SENSORS_SERVICE.CHARACTERISTICS.find((char) => char.UUID = data.characteristic);
    sensor = sensor.NAME;

    const buffer = Buffer.from(data.value);
    const value = JSON.parse(buffer.toString());

    if (sensor === 'POWER') {
      setAlerts((prev) => [...prev, { type: 'power', value }]);
    }
    if (sensor === 'OVERTURN') {
      setAlerts((prev) => ([...prev, { type: 'overturn', value }]));
    }
    if (sensor === 'CHAIR') {
      setAlerts((prev) => [...prev, { type: 'chair', value }]);
    }
    if (sensor === 'COLISION') {
      if (value.front) setAlerts((prev) => [...prev, { type: 'colision', value: 'frontal' }]);
      if (value.left) setAlerts((prev) => [...prev, { type: 'colision', value: 'a esquerda' }]);
      if (value.back) setAlerts((prev) => [...prev, { type: 'colision', value: 'na parte traseira' }]);
      if (value.right) setAlerts((prev) => [...prev, { type: 'colision', value: 'a direita' }]);
    }
  };

  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary_light,
        tabBarStyle: {
          height: 90,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
    >

      <Screen
        name="Conexão"
        children={(props) => <BluetoothConnection BleManager={BleManager} bleEmitter={bleEmitter} handleNewData={handleNewData} command={command} {...props} />}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Feather
              name="bluetooth"
              size={size}
              color={color}
            />
          )
          ),
        }}
      />
      <Screen
        name="Controle"
        children={(props) => <ControlInterface setCommand={setCommand} {...props} />}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="videogame-asset"
              size={size}
              color={color}
            />
          )
          ),
        }}
      />

      <Screen
        name="Avisos"
        children={(props) => <Warnings alerts={alerts} {...props} />}
        options={{
          tabBarIcon: (({ size, color }) => (
            <FontAwesome
              name="bell"
              size={size}
              color={color}
            />
          )
          ),
        }}
      />

      <Screen
        name="Tutorial"
        component={Tutorial}
        options={{
          tabBarIcon: (({ size, color }) => (
            <FontAwesome
              name="question-circle"
              size={size}
              color={color}
            />
          )
          ),
        }}
      />
    </Navigator>
  );
}
