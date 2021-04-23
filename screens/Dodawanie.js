import React, {Component, useState} from "react";
import {StyleSheet,ScrollView, View, ImageBackground, KeyboardAvoidingView,} from "react-native";
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
      <ImageBackground source={require('../assets/tlo dodawanie.png')} style={styles.Tło}>
        <View style={styles.Tło}>
          <View style={styles.paseknagorze}>
            <PasekNawigacyjny/>
          </View>
          <View style={styles.nazwa}>
            <FieldName/>
          </View>
            
          <View style={styles.nazwa}>
            <FieldCategory/>
          </View>

          <View style={styles.nazwa}>
            <FieldLocation/>
          </View>

          <View style={styles.nazwa}>
            <FieldCode/>
          </View>

          <View style={styles.opis}>
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
    paseknagorze:{
      width: '100%',
      flexDirection: 'row',
      marginBottom: 40,
    },

    nazwa:
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
    opis:
    {
      width: "80%",
      height: "30%",
      alignItems: "flex-start",
      marginLeft: "10%",
    },
    Tło: {
      width: '100%',
      height: '100%',      
    },
  })
