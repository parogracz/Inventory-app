import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export function Dodaj(navigation){
	return (
    <TouchableOpacity onPress={()=> {}} style={styles.appButtonContainer}>
      <View style={styles.Blue}>
       <Text style={styles.appButtonText}>Dodaj</Text>
      </View>
    </TouchableOpacity>
	);
}

export function Eksportuj(navigation){
	return (
    <TouchableOpacity onPress={()=> {}} style={styles.appButtonContainer}>
      <View style={styles.Orange}>
       <Text style={styles.appButtonText}>Eksportuj</Text>
      </View>
    </TouchableOpacity>
	);
};

export function Wyloguj(navigation){
	return (
  <TouchableOpacity onPress={()=> {}} style={styles.appButtonContainer}>
    <View style={styles.Gray}>
      <Text style={styles.appButtonText}>Wyloguj</Text>
    </View>
	</TouchableOpacity>
  );
};

export function Zaloguj(navigation){
	return (
    <TouchableOpacity onPress={()=> {}} style={styles.appButtonContainer}>
      <View style={styles.Orange}>
        <Text style={styles.appButtonText}>Zaloguj</Text>
      </View>
    </TouchableOpacity>
	);
};

const styles = StyleSheet.create({
      Gray:{
        backgroundColor: "#B6B6B4",
        borderRadius: 40,
        height: '100%',
      },
      Blue:{
        backgroundColor: "#8fa5be",
        borderRadius: 40,
        height: '100%',
      },
      Orange:{
          backgroundColor: "#ff8c1a",
          borderRadius: 40,
          height: '100%',
      },
      appButtonContainer: {
        width: 150,
        height: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignSelf: "center",
      },
      appButtonText: {
        marginTop: "4%",
        fontSize: 20,
        color: "#fff",
        alignSelf: "center",
        textTransform: "uppercase"
      }
  });