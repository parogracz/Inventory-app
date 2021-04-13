import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NotificationBox from "../components/NotificationBox";
import {PoleHaslo, PoleLogin} from '../components/Buttons.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({ navigation }) {
  const Creq_lib = require("../clientRequests/Creq_lib");

  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [notificationVisibility, setNotificationVisibility] = useState(false);
  const [notificationContent, setNotificationContent] = useState({});

  // do zrobienia
  const ForgotPassword = () => {
    console.log("do zrobienia");
  };

  const SendLoginData = () => {
    // zapytanie do serwera aby sprawdził dane i wygenerował token
    // do zrobienia token
    Creq_lib.login(username, password).then((resolve) => {
      setNotificationContent(resolve);
      setNotificationVisibility(resolve.error != null);
      if (resolve.error == null) {
        SetUsername("");
        SetPassword("");
        // tymczasowo, aby łatwiej się poruszać
        navigation.navigate("Home");
      }
    });
  };

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
        <View style={styles.wrapper}>
          <NotificationBox
            visibility={notificationVisibility}
            content={notificationContent}
            VisibilityHandler={() => setNotificationVisibility(false)}
          ></NotificationBox>
          <ImageBackground
            source={require("../assets/loginPage/LoginBackground.png")}
            style={styles.imageBackground}
          >
            <View style={styles.topContainer}>
              <Image
                style={styles.loginTitle}
                source={require("../assets/loginPage/LOGOWANIE.png")}
              />
              <View style={styles.inputContainer}>
                <View style={styles.Login}>
                  <PoleLogin/>
                </View>
                <View style={styles.Login}>
                  <PoleHaslo/>
                </View>
                {/* tutaj wstawić nowe inputy */}
              </View>
            </View>

            <View style={styles.bottContainer}>
              {/* // Przycisk "Zaloguj" */}
              <TouchableOpacity onPress={SendLoginData} style={styles.button}>
                <Image
                  style={styles.imgButton}
                  source={require("../assets/loginPage/ZALOGUJButton.png")}
                />
              </TouchableOpacity>
              <Text
                onPress={ForgotPassword}
                style={{ fontSize: 16, color: "#a2b9d4" }}
              >
                Zapomniałem(am) hasła
              </Text>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    resizeMode: "cover",
  },
  topContainer: {
    width: "85%",
    maxWidth: 300,
    alignItems: "center",
    padding: 10,
    paddingTop: 40,
  },
  loginTitle: {
    maxWidth: "80%",
    resizeMode: "contain",
  },
  inputContainer: {
    width: "100%",
    marginTop: '10%',
  },
  bottContainer: {
    marginTop: '10%',
    alignItems: "center",
  },
  button: {
    maxWidth: 150,
  },
  imgButton: {
    resizeMode: "contain",
    maxWidth: "100%",
  },
  Login: {
    width: '100%',
    height: '23%',
    margin: '3%',
    minHeight: 40,
  },
});