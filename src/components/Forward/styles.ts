import styled from 'styled-components/native';
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TouchableOpacity)`
    font-size: ${RFValue(45)}px;
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 80px;
    height: 80px;
    z-index: 3;
    top: ${RFValue(50)}px;
    border-radius: 18px;
`;

export const ArrowIcon = styled(Ionicons)`
    font-size: ${RFValue(65)}px;
    align-self: center;
    color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;
    top: ${RFValue(2)}px;
`;