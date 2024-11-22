import { Image, ScrollView, StyleSheet, View } from "react-native";
import Header from "../../Componentes/Header/Header";
import Banner from "../../Componentes/Banner";
import CardMovie from "../../Componentes/Cards/CardMovie";
import Texts from "../../Componentes/Text";
import CardVideo from "../../Componentes/Cards/CardVideo";
import FooterAdmin from "../../Componentes/Footer/FooterAdmin";
import CardMovieAdmin from "../../Componentes/Cards/CardMovieadmin";

export default function Home() {
  return (
    <View style={styles.containerPricipal}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <Banner />
        <Image
          style={styles.imageDecoration}
          source={require('../../Assets/Images/decoration.png')}
        />
        <Texts />

        <ScrollView
          horizontal
          style={styles.cardMovieContainer}
          showsHorizontalScrollIndicator={false}
        >
          {[...Array(4)].map((_, index) => (
            <CardMovieAdmin key={index} />
          ))}
        </ScrollView>

        <Texts />

        {/* Card Videos */}
        {[...Array(3)].map((_, index) => (
          <CardVideo key={index} />
        ))}
      </ScrollView>
      <FooterAdmin />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPricipal: {
    flex: 1, 
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1, 
    paddingBottom: 60, 
  },
  cardMovieContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    paddingVertical: 5,
  },
  imageDecoration: {
    height: 30,
    marginTop: 10,
    marginLeft: 150,
    width: 100,
  },
});
