import React from "react";
import {
    Container,
    Header,
    Icon,
    Title,
    BluetoothContainer,
    Message,
    BluetoothDevicesContainer,
    IconContainer,
    BluetoothIcon,
} from "./styles";

export function BluetoothConnection() {
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
            </BluetoothContainer>

            <BluetoothDevicesContainer>
                <IconContainer>
                    <BluetoothIcon name="bluetooth"></BluetoothIcon>
                </IconContainer>
            </BluetoothDevicesContainer>
        </Container>
    );
}