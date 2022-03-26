import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
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

export const Icon = styled(MaterialIcons)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(30)}px;
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

export const WarningIcon = styled(Feather)`
    font-size: ${RFValue(25)}px;
    margin-right: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.secondary};
`;

export const Control = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    justify-content: center;
`;

export const CircleContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    justify-content: center;
    align-items: center;
`;

export const Circle = styled.View`
    position: relative;
    width: 350px;
    height: 350px;
    background-color: ${({ theme }) => theme.colors.tertiary_light};
    align-items: center;
    border-radius: 200px;
`;

export const Slices = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    flex: 1;
    position: relative;
    z-index: 1;
`;

export const Slice1 = styled.View`
    position: absolute;
    width: 3px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    transform: rotate(45deg);
`;

export const Slice2 = styled.View`
    position: absolute;
    width: 3px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    transform: rotate(90deg);
`;

export const Slice3 = styled.View`
    position: absolute;
    width: 3px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    transform: rotate(135deg);
`;

export const Slice4 = styled.View`
    position: absolute;
    width: 3px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    transform: rotate(180deg);
`;

export const Hole = styled.View`
    position: absolute;
    height: 300px;
    width: 300px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 200px;
    z-index: 2;
    left: 25px;
    top: 25px;
    bottom: 0px;
    right: 0px;
    margin: auto;
`;

export const ArrowUp = styled.View`
    font-size: ${RFValue(45)}px;
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 80px;
    height: 80px;
    z-index: 3;
    top: ${RFValue(50)}px;
    border-radius: 18px;
`;

export const ArrowDown = styled.View`
    font-size: ${RFValue(45)}px;
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 80px;
    height: 80px;
    z-index: 3;
    top: ${RFValue(-20)}px;
    border-radius: 18px;
`;

export const ArrowLeft = styled.View`
    font-size: ${RFValue(45)}px;
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 80px;
    height: 80px;
    z-index: 3;
    top: ${RFValue(50)}px;
    right: ${RFValue(70)}px;
    color: #fff;
    border-radius: 18px;
`;

export const ArrowRight = styled.View`
    font-size: ${RFValue(45)}px;
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 80px;
    height: 80px;
    z-index: 3;
    top: ${RFValue(-20)}px;
    left: ${RFValue(70)}px;
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