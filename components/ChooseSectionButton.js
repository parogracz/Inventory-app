import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

export default function ChooseSectionButton({
  srcImg,
  PressHandler,
  containerStyles,
}) {
  const OnPress = () => {
    PressHandler();
  };

  return (
    <TouchableOpacity
      style={[styles.container, containerStyles]}
      activeOpacity={0.6}
      onPress={OnPress}
    >
      <Image style={styles.img} source={srcImg} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "40%",
    maxHeight: "40%",
    marginVertical: 10,
    marginHorizontal: 12,
  },

  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    resizeMode: "contain",
  },
});
