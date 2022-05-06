import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    flex-direction: row;
    margin-top: 20px;
    width: 90%;
    margin-left: ${RFValue(15)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const IconContainer = styled.View`
    height: 70px;
    width: 70px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background-color: rgba(46, 71, 142, 0.3);
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(25)}px;
    color: rgba(46, 71, 142, 0.56);
`;

export const ContentContainer = styled.View`
    padding-left: 10px;
    flex-shrink: 1;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: bold;
`;

export const Time = styled.Text`
    font-size: ${RFValue(14)}px;
    color: grey;
`;

export const Description = styled.Text`
    font-size: ${RFValue(14)}px;
`;
