import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function FooterAdmin() {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('HomeAdmin')}
      >
        <Ionicons name="home-outline" size={26} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('SearchAdmin')}
      >
        <Ionicons name="search-outline" size={30} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Post')}
      >
        <Ionicons name="add-outline" size={30} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('ReviewAdm')}
      >
        <Ionicons name="people-outline" size={30} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});