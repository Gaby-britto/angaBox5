import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import MyButton from '../../Componentes/Button';
import Footer from '../../Componentes/Footer/Footer';
import CardReviewAdmin from '../../Componentes/Cards/CardReviewAdmin';

export default function ReviewAdmin() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9400D3" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.imageHeader}
          source={require('../../Assets/Images/header.png')}
        />
        <Image
          style={styles.image}
          source={{ uri: 'https://i.pinimg.com/564x/fb/55/33/fb553309af3b1e60ca4d8a85972d4c11.jpg' }}
        />
        <Text style={styles.title}>THE BATMAN</Text>
        <Text style={styles.question}>
          After two years prowling the streets as Batman, Bruce Wayne finds himself in the darkest depths of Gotham City. With few reliable allies, the lone vigilante establishes himself as the personification of revenge for the population.
        </Text>
        <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Write your review here..."
        multiline
      />
        <View style={styles.containerButton}>
          <MyButton title="Submit Review" onPress={() => {}} />
        </View>
        <CardReviewAdmin/>
        <CardReviewAdmin/>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 80,
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageHeader: {
    position: 'absolute',
    width: '100%',
    height: 200,
  },
  image: {
    width: 200,
    marginLeft: 10,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
    marginTop: 100,
  },
  title: {
    marginLeft: 10,
    fontSize: 32,
    color: 'black',
    marginBottom: 10,
    fontFamily: 'Montserrat_700Bold',
  },
  question: {
    textAlign: 'justify',
    padding: 15,
    color: 'gray',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    fontFamily: 'Montserrat_400Regular',
  },
  input: {
    marginLeft: 10,
    marginTop: 20,
    height: 50,
    width: 390,
    borderColor: '#9400D3',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
    fontFamily: 'Montserrat_400Regular',
  },
  containerButton: {
    alignItems: 'center',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
    color: '#9400D3',
    fontFamily: 'Montserrat_700Bold',
  },
  divider: {
    marginLeft: 10,
    flex: 1,
    height: 1.5,
    width: 385,
    backgroundColor: '#9400D3',
    marginVertical: 10,
  },
  reviewText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  
});
