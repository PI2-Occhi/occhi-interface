import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesome, Feather, EvilIcons, Ionicons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape };
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: ${RFValue(72)}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(FontAwesome)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(25)}px;
    margin-right: 10px;
    margin-top: ${getStatusBarHeight() + RFValue(3)}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    margin-top: ${getStatusBarHeight() + RFValue(3)}px;
    font-size: 18px;
    font-weight: bold;
`;

export const Icons = styled.View`
    margin-top: ${RFValue(10)}px;
    height: ${RFValue(27)}px;
    margin-top: ${RFValue(20)}px;
    flex-direction: row;
    justify-content: space-between;
`;

export const MenuIcon = styled(Feather)`
    font-size: ${RFValue(25)}px;
    margin-left: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.secondary};
`;

export const CloseIcon = styled(EvilIcons)`
    font-size: ${RFValue(25)}px;
    margin-right: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.secondary};
`;

export const TutorialContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    margin-top: ${RFValue(30)}px;
`;

export const ForwardArrowContainer = styled.View`
    height: ${RFValue(80)}px;
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const Arrow = styled.View`
    width: 60px;
    height: 60px;
    font-size: ${RFValue(60)}px;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 10px;
`;

export const ArrowIcon = styled(Ionicons)`
    font-size: ${RFValue(50)}px;
    color: ${({ theme }) => theme.colors.primary};
    align-self: center;;
`;

export const RotateStopIcons = styled(Feather)`
    font-size: ${RFValue(35)}px;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.primary};
    align-self: center;;
`;

export const Text = styled.Text`
    font-size: ${RFValue(18)}px;
    color: #606060;
    font-weight: bold;
    flex-shrink: 1;
`;
