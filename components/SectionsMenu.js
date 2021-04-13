import React from "react";
import { View, StyleSheet } from "react-native";

export default function SectionsMenu({ children, containerStyles }) {
  return (
    <View style={[styles.buttonsContainer, containerStyles]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    height: "100%",
    flexGrow: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
});
