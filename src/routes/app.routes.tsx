import React from "react";
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';
import { Platform } from "react-native";
import { ControlInterface } from "../screens/ControlInterface";
import { Tutorial } from "../screens/Tutorial";
import { BluetoothConnection } from "../screens/BluetoothConnection";
import { Warnings } from "../screens/Warnings";
import { useTheme } from 'styled-components';
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons'


const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    const theme = useTheme();
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.secondary_light,
                tabBarStyle: {
                    height: 88,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                }
            }}
        >
            <Screen
                name="Controle"
                component={ControlInterface}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons 
                            name="videogame-asset"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name="Avisos"
                component={Warnings}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <FontAwesome 
                            name="bell"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name="Tutorial"
                component={Tutorial}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <FontAwesome 
                            name="question-circle"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name="Conexão"
                component={BluetoothConnection}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <Feather 
                            name="bluetooth"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>
    )
}
