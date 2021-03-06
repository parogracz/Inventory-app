import React from "react";
import {Text, View, StyleSheet, TouchableOpacity,
    Image, Dimensions, } from "react-native";

/* Pasek nawigacyjny */

/* Dodanie go do ekranu w App.js: 
        <Stack.Screen 
        options={{headerTitle: () => <PasekNawigacyjny/>}}>
        </Stack.Screen>

*/

export const PasekNawigacyjny = ({navigation} /* Obiekt do nawigacji */) => {
  return (
    <View style={styles.header}>
        <TouchableOpacity
            /* Nawigacja onPress={() => navigation.navigate("ekran")} */>
            <Image source={require("../assets/homeIcon.png")} style={styles.home}/>
        </TouchableOpacity>
        <TouchableOpacity
            /* Nawigacja onPress={() => navigation.navigate("ekran")} */>
            <Image source={require("../assets/itemIcon.png")} style={styles.item}/>
        </TouchableOpacity>
        <Image source={require("../assets/pusty2Icon.png")} style={styles.pusty}/>
        
    </View>
  );
}

export const PasekNawigacyjnyInfo = ({navigation} /* Obiekt do nawigacji */) => {
  return (
    <View style={styles.header}>
        <TouchableOpacity
            /* Nawigacja onPress={() => navigation.navigate("ekran")} */>
            <Image source={require("../assets/homeIcon.png")} style={styles.home}/>
        </TouchableOpacity>
        <TouchableOpacity
            /* Nawigacja onPress={() => navigation.navigate("ekran")} */>
            <Image source={require("../assets/itemIcon.png")} style={styles.item}/>
        </TouchableOpacity>
        <TouchableOpacity
            /* Nawigacja onPress={() => navigation.navigate("ekran")} */>
            <Image source={require("../assets/infoIcon.png")} style={styles.info}/>
        </TouchableOpacity>
        <Image source={require("../assets/pustyIcon.png")} style={styles.pusty}/>
  </View>
  );
}


/* Pobiera wymiary okna */

const {width, height} = Dimensions.get("window");


const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  home: {
    width: width * 0.15,
    height: height * 0.065,
  },
  item: {
    width: width * 0.15,
    height: height * 0.065,
  },
  info: {
    width: width * 0.15,
    height: height * 0.065,
  },
  pusty: {
    width: width * 0.7,
    height: height * 0.065,
  },
});
