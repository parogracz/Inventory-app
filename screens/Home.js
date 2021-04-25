import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import {LogOut} from '../components/Buttons.js';
import {PackageButton, LocationButton, UsersButton, SettingButton} from '../components/roundTouch.js';
import ChooseSectionButton from "../components/ChooseSectionButton";
import SectionsMenu from "../components/SectionsMenu";

export default function Home({ navigation }) {
  const Logout = () => {
    // tymczasowo, aby łatwiej się poruszać
    navigation.navigate("Login");
  };

  // poszczególne sekcje do menu
  // const Sections = () => {
  //   return (
  //     <>
  //       <ChooseSectionButton
  //         srcImg={require("../assets/homePage/TOWARButton.png")}
  //         PressHandler={() => {
  //           navigation.navigate("Dodawanie");
  //         }}
  //       />
  //       <ChooseSectionButton
  //         srcImg={require("../assets/homePage/LOKALIZACJAButton.png")}
  //         PressHandler={() => {
  //           navigation.navigate("Login");
  //         }}
  //       />
  //       <ChooseSectionButton
  //         srcImg={require("../assets/homePage/UŻYTKOWNICYButton.png")}
  //         PressHandler={() => {
  //           navigation.navigate("Raport");
  //         }}
  //       />
  //       <ChooseSectionButton
  //         srcImg={require("../assets/homePage/USTAWIENIAButton.png")}
  //         PressHandler={() => {
  //           navigation.navigate("Login");
  //         }}
  //       />
  //     </>
  //   );
  // };

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        // nie znalazłem tła w plikach, więc dałem "tło dodawanie"
        source={require("../assets/homePage/tempBackground.png")}
        style={styles.imageBackground}
      >
        <View 
          style={styles.logout}
        >
          <LogOut/>
        </View>
        
        <View
          style={styles.buttonContainer}
        >
          <PackageButton/>
          <LocationButton/>
          <UsersButton/>
          <SettingButton/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  logout: {
    marginTop: 40,
    marginLeft: "50%",
    height: '8%',
    maxHeight: 70,
  },
  imgButton: {
    resizeMode: "contain",
    maxWidth: "100%",
  },
  buttonContainer: {
    width:"80%",
    height:"80%",
  },
});
