import React, { useState, useEffect } from "react";
import { Animated, StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { StyledImage, StyledView } from './styles';

const Detail = ({ route, navigation}) => {
    const [data, setData] = useState([]);
    const id = route.params.id;
    const type = route.params.type;
    console.log(id, type)

    useEffect(() => {
        axios({
            method: "get",
            url: `https://api.themoviedb.org/3/${type}/${id}?api_key=7b04dcff9b86f4c311c3818cc5a16ce6`,
        }).then(response => {
            setData(response.data);
        }).catch(error => {console.log(error)});
    
    }, [route.params]);

    const hideTabBar = () => {
        navigation.setOptions({
            tabBarStyle: { 
                display: 'none',
            }
        });
    };

    const showTabBar = () => {
        navigation.setOptions({
            tabBarStyle: { 
                backgroundColor: '#141414',
                position: 'absolute',
                height: 70,
                bottom: 20,
                right: 20,
                left: 20,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.8,
                shadowRadius: 5,
                elevation: 12,
                zIndex: 10,
            },
        });
    };

    return (
        <ScrollView
            onScroll={({nativeEvent}) => {
                if(nativeEvent.contentOffset.y > 0){
                    navigation.setOptions(
                        hideTabBar()
                    );
                }else{
                    navigation.setOptions(
                        showTabBar()
                    );
                }
            }}
            scrollEventThrottle={400}
        >
            <View>
                <StyledImage source={{uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`}} />
                <LinearGradient style={{position: 'absolute', width: '100%', height: '100%'}} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.8)']}
                >
                </LinearGradient>
            </View>

            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: 20,
                    marginLeft: 20,
                    color: "white",
                }}
            >
                {data.title}
            </Text>
            <Text style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 10,
                color: "white",
            }}>
                {data.overview}
            </Text>
            <Text style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 10,
                color: "white",
            }}>
                {data.overview}
            </Text>
            <Text style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 10,
                color: "white",
            }}>
                {data.overview}
            </Text>
            <Text style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 10,
                color: "white",
            }}>
                {data.overview}
            </Text>
            <Text style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 10,
                color: "white",
            }}>
                {data.overview}
            </Text>
            <Text style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 10,
                color: "white",
            }}>
                {data.overview}
            </Text>
            <Text style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 10,
                color: "white",
            }}>
                {data.overview}
            </Text>
            <Text style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 10,
                color: "white",
            }}>
                {data.overview}
            </Text>
        </ScrollView>
    );
}
export default Detail;