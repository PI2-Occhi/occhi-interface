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

export const FilterContainer = styled.View`
    background-color: #e8e8ee;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 50px;
    width: 95%;
    flex-direction: row;
    border: 2px solid #fff;
    border-radius: 40px;
`;

export const Diary = styled.View`
    height: 100%;
    width: 50%;
    background-color: white;
    text-align: center;
    padding-top: 15px;
    border-radius: 40px;
`;

export const Weekly = styled.View`
    width: 50%;
    text-align: center;
    padding-top: 15px;
    height: 100%;
    border-radius: 40px;
`;

export const DiaryText = styled.Text`
    align-self: center;
    font-size: ${RFValue(16)}px;
    color: #2E478E;
    font-weight: bold;
`;

export const WeeklyText = styled.Text`
    align-self: center;
    font-size: ${RFValue(16)}px;
    color: #bdbdbd;
    font-weight: bold;
`;
