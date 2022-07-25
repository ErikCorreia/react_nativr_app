import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import axios from 'axios';
import Card from '../../components/Card';
import { styles } from './styles';
import { FlexText } from './styles';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3//trending/movie/week?api_key=7b04dcff9b86f4c311c3818cc5a16ce6",
    }).then(response => {
      setSeries(response.data.results);
    });
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3//trending/tv/week?api_key=7b04dcff9b86f4c311c3818cc5a16ce6",
    }).then(response => {
      setMovies(response.data.results);
    });
  }, []);

  if(movies.length === 0 || series.length === 0){
    return (
      <View style={loaderStyle.loadingContainer}>
        <Text style={loaderStyle.text}>Loading...</Text>
      </View>
    )
  }else{
    return (
      <ScrollView style={styles.cardContainer}>
        <FlexText>
          <Text 
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 20,
                marginBottom: 20,
                padding: 20,
                paddingLeft: 50,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                backgroundColor: 'rgba(255,255,255,.1)',
                textTransform: 'uppercase',
              }}
            >
              Filmes
          </Text>
        </FlexText>
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {movies.map((item) => {
          return <Card key={item.id} item={item} />
        }
        )}
      </ScrollView>
      <FlexText>
        <Text 
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 20,
              marginBottom: 20,
              marginTop: 50,
              padding: 20,
              paddingLeft: 50,
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              backgroundColor: 'rgba(255,255,255,.1)',
              textTransform: 'uppercase',
            }}
          >
            Series
          </Text>
      </FlexText>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      >
        {series.map((item) => {
          return <Card key={item.id} item={item} />
        }
        )}
      </ScrollView>
      </ScrollView>
    );
  }

}

const loaderStyle = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  }
})

export default Home;