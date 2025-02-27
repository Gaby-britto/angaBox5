import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Footer from '../../Componentes/Footer/Footer';

export default function User() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   }

  return (
    <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.hello}>Hello,</Text>
          <Text style={styles.username}> Ana Gaby</Text>
        </View>

        <View style={styles.containerInfo}>
          <Text style={styles.info}>Your Information</Text>
        </View>

        <View style={styles.field}>
          <Ionicons name="person-outline" size={30} color="#9400D3" />
          <TextInput
            style={styles.input}
            placeholder="Gaby Bea"
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.field}>
          <Ionicons name="mail-outline" size={30} color="#9400D3" />
          <TextInput
            style={styles.input}
            placeholder="gaby@gmail.com"
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.field}>
          <Ionicons name="key-outline" size={30} color="#9400D3" />
          <TextInput
            style={styles.input}
            placeholder="************"
            secureTextEntry
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil" size={20} color="black" />
          </TouchableOpacity>
        </View>
      
      <Image
          style={styles.imageFooter}
          source={require('../../Assets/Images/footer.png')}
        />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    alignItems: 'center',
    paddingTop: 40,
  },
  hello: {
    color: 'gray',
    fontSize: 40,
    fontFamily: 'Montserrat_400Regular',
  },
  username: {
    fontSize: 40,
    color: "#9400D3",
    fontFamily: 'Montserrat_400Regular',
  },
  image: {
    marginTop: 50,
    width: 100,
    height: 100,
    borderRadius: 75,
  },
  info: {
    color: '#9400D3',
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'left',
    borderBottomWidth: 1,
    borderBottomColor: '#9400D3',
    marginBottom: 20,
    marginTop: 100
  },
  containerText: {
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 20,
    marginTop: 150
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 25,
    paddingBottom: 5,
  },
  input: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    color: "#333",
  },
  editIcon: {
    marginLeft: 10,
  },
  containerInfo: {
    marginTop: 0,
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  imageFooter:{
    marginTop: 100,
    width: 500,
    height: 200
  }
});
