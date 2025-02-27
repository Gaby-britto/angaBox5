import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import {  ImageBackground, StyleSheet, Text, View } from 'react-native';
const image = 'https://i.pinimg.com/564x/e1/0b/19/e10b1920526f880c589ff7e2e2df6641.jpg';

export default function CardMovie() {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const listMovies = async () => {
    try {
      const response = await axios.get("http://10.92.198.21:8080/api/movie");
      setMovies(response.data.movies);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
 
  useEffect(() => {
    listMovies();
  }, []);
  return (
    <View style={styles.cardContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        movies.map((movie) => (
          <TouchableOpacity
            key={movie._id}
            style={styles.container}
            onPress={() => navigation.navigate('Review', { id: movie._id })}
          >
            <ImageBackground
              style={styles.imageBanner}
              source={{ uri: movie.img }}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.textContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.subTitle}>{movie.gender}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  container: {
    width: 150,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  imageBanner: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 10,
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  subTitle: {
    fontSize: 12,
    color: 'lightgray',
  },
});
 