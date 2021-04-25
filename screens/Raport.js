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
      <ImageBackground source={require('../assets/tlo_raport.png')} style={styles.background}>
        <View style={styles.export}>

          <View style={styles.navi}>
            <PasekNawigacyjnyInfo/>
          </View>

          <View style={styles.header}>
            <Image 
            source={require('../assets/raport.png')}
            style={styles.h1}
            />
          </View>
          
          <View style={styles.name}>
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
    background: {
      width: '100%',
      height: '100%',      
    },
    navi:{
      width: '110%',
      flexDirection: 'row',
    },
    header:{
      alignItems:'center',
    },
    h1:{
      resizeMode: "contain",
      width: 200,
    },
    export:{
        width: '100%',
        height: '80%',      
    },
    name:{
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