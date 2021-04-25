import React, {Component, useState} from "react";
import {Stack,StyleSheet,ScrollView, View, ImageBackground, KeyboardAvoidingView,} from "react-native";
import tlo from "../assets/homePage/tempBackground.png";
import {FieldName, FieldCategory, FieldLocation, FieldCode, FieldDescription} from '../components/Inputs.js';
import {Add} from '../components/Buttons.js';
import {PasekNawigacyjny} from '../components/PasekNawigacyjny.js';

export default function App(){
  return (
  <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      minHeight: "100%",
    }}
  >
    <KeyboardAvoidingView
      style={{
        flexGrow: 1,
      }}
    >
      <ImageBackground source={require('../assets/tlo dodawanie.png')} style={styles.background}>
        <View style={styles.background}>
          <View style={styles.navi}>
            <PasekNawigacyjny/>
          </View>
          <View style={styles.name}>
            <FieldName/>
          </View>
            
          <View style={styles.name}>
            <FieldCategory/>
          </View>

          <View style={styles.name}>
            <FieldLocation/>
          </View>

          <View style={styles.name}>
            <FieldCode/>
          </View>

          <View style={styles.description}>
            <FieldDescription/>
          </View>

          <View style={styles.buttonContainer}>
            <Add/>
          </View>

        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  </ScrollView>
  );
};
  const styles=StyleSheet.create({
    navi:{
      width: '100%',
      flexDirection: 'row',
      marginBottom: 40,
    },

    name:
    {
      width: "80%",
      marginLeft: "10%",
      marginBottom: "5%",
      height: 47,
    },

    buttonContainer:
    {
      width:"100%",
      alignItems: "center",
      height: "9%",
    },
    description:
    {
      width: "80%",
      height: "30%",
      alignItems: "flex-start",
      marginLeft: "10%",
    },
    background: {
      width: '100%',
      height: '100%',      
    },
  })
