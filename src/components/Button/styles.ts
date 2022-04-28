import styled from 'styled-components/native';
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TouchableOpacity)`
    width: 70%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    align-items: center;
    padding: 18px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.secondary};
`;