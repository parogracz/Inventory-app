import React, {Component, useState} from "react";
import { Button, StyleSheet, Text, View, Image, ImageBackground, TextInput} from "react-native";
import {LokalizacjaRaport} from '../components/Inputs.js';
import {Eksportuj} from '../components/Buttons.js';
import {Table} from '../components/Table.js';
import { ScrollView } from "react-native-gesture-handler";
import {PasekNawigacyjny,PasekNawigacyjnyInfo} from '../components/PasekNawigacyjny.js';

export default function App(){
  return (
  //<ScrollView>
  <ImageBackground source={require('../assets/tlo_raport.png')} style={styles.Tło}>
    <View style={styles.bezeksportu}>

      <View style={styles.paseknagorze}>
        <PasekNawigacyjnyInfo/>
      </View>

      <View style={styles.naglowek}>
        <Image 
        source={require('../assets/raport.png')}
        style={styles.h1}
        />
      </View>
      
      <View style={styles.nazwa}>
        <LokalizacjaRaport/>
      </View>

      <View style={styles.tableContainer}>
        <Table/>
      </View>
      
      <View style={styles.buttonContainer}>
        <Eksportuj/>
      </View>
    </View>
  </ImageBackground>
  //</ScrollView>
  );
}
  const styles=StyleSheet.create({
    Tło: {
      width: '100%',
      height: '100%',      
    },
    paseknagorze:{
      width: '110%',
      flexDirection: 'row',
    },
    naglowek:{
      alignItems:'center',
    },
    h1:{
      resizeMode: "contain",
      width: 200,
    },
    bezeksportu:{
        width: '100%',
        height: '80%',      
    },
    nazwa:{
      width: "80%",
      alignItems: "center",
      height:53,      
      marginTop: 30,
      margin: '10%'
    },
    tableContainer:{
      width:'85%',
      marginLeft: '8%',
      height: '60%',
    },
    buttonContainer:{
      width:'100%',
      height:'11%',
    },
  })