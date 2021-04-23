import React, {Component, useState} from "react";
import { ScrollView, StyleSheet, KeyboardAvoidingView, View, Image, ImageBackground, TextInput} from "react-native";
import {FieldRaportLocation} from '../components/Inputs.js';
import {Explort} from '../components/Buttons.js';
import {Table} from '../components/Table.js';
import {PasekNawigacyjny,PasekNawigacyjnyInfo} from '../components/PasekNawigacyjny.js';

export default function App(){
  return (
    <KeyboardAvoidingView
      style={{
        flexGrow: 1,
      }}
    >
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
            <FieldRaportLocation/>
          </View>

          <View style={styles.tableContainer}>
            <Table/>
          </View>
          
          <View style={styles.buttonContainer}>
            <Explort/>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
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
      height: '60%',
      alignSelf: "center",
    },
    buttonContainer:{
      width:'100%',
      height:'11%',
    },
  })