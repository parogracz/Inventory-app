import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Navigator from "./route/homeStack.js"

export default function App() {
  return (
    <Navigator/>
  );
}
