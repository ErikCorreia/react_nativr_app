import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';

import Tabs from './src/navigation/Tabs';
import StackNavigation from './src/navigation/Stack';
import Sidebar from './src/navigation/Sidebar';

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar 
        // style="light"
        barStyle="light-content"
      />
      <Sidebar />
    </NavigationContainer>
  );
}