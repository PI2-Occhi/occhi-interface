import styled from 'styled-components/native';
import { TouchableOpacity } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TouchableOpacity)`
    font-size: ${RFValue(45)}px;
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 80px;
    height: 80px;
    z-index: 3;
    border-radius: 18px;
`;

export const ArrowIcon = styled(Feather)`
    font-size: ${RFValue(45)}px;
    align-self: center;
    margin-top: 12px;
    color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;
    top: ${RFValue(2)}px;
`;