import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const image = 'https://i.pinimg.com/564x/e1/0b/19/e10b1920526f880c589ff7e2e2df6641.jpg';

export default function CardMovieAdmin() {
  const handleDelete = () => {
    alert('Filme deletado!');
  };

  const handleEdit = () => {
    alert('Modo de edição ativado!');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBanner}
        source={{ uri: image }}
        imageStyle={styles.imageStyle}
      />
      <Text style={styles.title}>Rio 2</Text>
      <Text style={styles.subTitle}>Adventure, Brazil</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Ionicons name="pencil-outline" size={16} color="#FFF" />
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDelete}>
          <Ionicons name="trash-outline" size={16} color="#FFF" />
          <Text style={styles.buttonText}>Delet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginTop: 30,
    marginLeft: 10,
  },
  imageBanner: {
    width: '100%',
    height: 200,
  },
  imageStyle: {
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
  subTitle: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  button: {
    marginLeft:2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9400D3',
    padding: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#9400D3',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 12,
    marginLeft: 15,
  },
});
