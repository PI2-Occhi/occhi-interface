import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/app.routes'
import BleManager from 'react-native-ble-manager';
import { NativeEventEmitter, NativeModules } from 'react-native';

const BleManagerModule = NativeModules.BleManager;
console.log(BleManagerModule)
// const bleEmitter = new NativeEventEmitter(BleManagerModule);

const BluetoothApp = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [list, setList] = useState([]);
  const peripherals = new Map();
  const [testMode, setTestMode] = useState('read');


}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>
    </ThemeProvider>
  );
}
