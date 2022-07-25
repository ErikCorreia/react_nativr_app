import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { Animated, TouchableOpacity, StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { styles } from './styles';

const Card = ({ item }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Detail', { id: item.id, type: item.media_type })}
            style={styles.card}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
                style={styles.image}
            />
        </TouchableOpacity>
    );
}
export default Card;
