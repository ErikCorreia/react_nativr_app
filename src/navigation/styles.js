import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

export const screenOptions = {

    headerShown: false,
    tabBarStyle:{
        backgroundColor: '#141414',
        // position: 'absolute',
        height: 70,
        // bottom: 20,
        // right: 20,
        // left: 20,
        // borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 12,
        zIndex: 10,
    },
    tabBarItemStyle:{
    }
};

export const sceneContainerStyle = {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#121212',
};

export const tabBarOptions = {
    activeTintColor: '#d50808',
    inactiveTintColor: '#f5b5b5',
    showLabel: false,
    style: {
        
    }
}
