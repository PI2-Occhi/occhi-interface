import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: ${RFValue(72)}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(20)}px;
    margin-right: 10px;
    margin-top: ${getStatusBarHeight() + RFValue(3)}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    margin-top: ${getStatusBarHeight() + RFValue(3)}px;
    font-size: 18px;
    font-weight: bold;
`;

export const BluetoothContainer = styled.View`
    align-items: center;
    height: 300px;
    justify-content: center;
    margin: 10px;
`;

export const Message = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(26)}px;
    text-align: center;
    font-weight: bold;
`;

export const BluetoothDevicesContainer = styled.View`
    height: 500px;
`;

export const IconContainer = styled.View`
    align-items: center;
`;

export const BluetoothIcon = styled(Feather)`
    font-size: ${RFValue(50)}px;
    color: ${({ theme }) => theme.colors.primary};
    top: ${RFValue(40)}px;
`;