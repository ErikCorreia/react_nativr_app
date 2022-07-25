import React from "react";
import { View, Text, Image } from "react-native";

const Movies = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#cc2020',
              }}
            >Movies</Text>
          </View>
    )
}
export default Movies;