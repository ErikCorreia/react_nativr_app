import React from "react";
import { Text, View } from 'react-native';

const Categories = () => {
    return (
        <View 
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold'
                }}
            >
                Categories
            </Text>
        </View>
    );
}
export default Categories;