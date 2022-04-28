import React, { useState } from "react";
import {
    Container,
    Header,
    Icon,
    Title,
    BluetoothContainer,
    Message,
    Fields,
} from "./styles";

import { FlatList, StyleSheet, Text } from 'react-native';

import { Button } from "../../components/Button";

export function BluetoothConnection() {
    const [isScanning, setIsScanning] = useState(false);
    const [list, setList] = useState([]);
    const peripherals = new Map();
    const [testMode, setTestMode] = useState('read');

    const startScan = () => {
        console.log("Start Scan")
        /* if (isScanning) {
            return;
        }

        peripherals.clear();
        setList(Array.from(peripherals.values()));

        BleManager.scan([], 3, true)
        .then(() => {
            console.log('Scanning...');
            setIsScanning(true);
        })
        .catch((err) => {
            console.error(err);
        }); */
    };
    return (
        <Container>
            <Header>
                <Icon name="bluetooth"></Icon>
                <Title>Conexão</Title>
            </Header>
            <BluetoothContainer>
                <Message>
                    Conecte seu celular com o bluetooth da Cadeira OCCHI
                </Message>
                <Button title="Scan Bluetooth Devices" onPress={() => startScan()}/>
                <Fields>
                    <FlatList data={[
                        {key:"Cadeira OCCHI 1"},
                        {key:"Cadeira OCCHI 2"},
                        {key:"Cadeira OCCHI 3"},
                        {key:"Cadeira OCCHI 4"},
                    ]} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </Fields>
            </BluetoothContainer>
        </Container>
    );
}

const styles = StyleSheet.create({
    item: {
        fontSize: 20,
        height: 44,
        color: "#FFFFFF",
      },
});