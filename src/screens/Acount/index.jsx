import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const  Acount = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Acount</Text>
            <Button title="Login" onPress={() => navigation.navigate("Login")}/>
        </View>
    );
}
export default Acount;