import React, { useState } from "react";
import { primaryColor1, primaryColor2 } from "../assets/Styles";
import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  View,
  Modal,
  StyleSheet,
  Pressable,
  TextInput,
  Linking,
} from "react-native";

const Login = ({ navigation }) => {
  const [email, changeMail] = useState("");
  const [password, changePass] = useState("");

  return (
    <LinearGradient
      colors={[primaryColor1, primaryColor2]}
      start={{ x: 1.5, y: -0.5 }}
      end={{ x: -0.5, y: 1.5 }}
      style={{ flex: 1 }}
    >
      <View style={styles.centeredView}>
        <View style={styles.formView}>
          <Text style={{ marginBottom: 7 }}>Email</Text>
          <TextInput
            onChangeText={changeMail}
            value={email}
            style={[styles.Inputs, { marginBottom: 13 }]}
          />
          <Text style={{ marginBottom: 7 }}>Password</Text>
          <TextInput
            onChangeText={changePass}
            value={password}
            style={styles.Inputs}
          />
          <LinearGradient
            colors={[primaryColor1, primaryColor2]}
            start={{ x: 1.5, y: -0.5 }}
            end={{ x: -0.5, y: 1.5 }}
            style={styles.button}
          >
            <Text
              style={styles.buttonTextStyle}
              onPress={() => {
                navigation.navigate("Landing");
              }}
            >
              Login
            </Text>
          </LinearGradient>
          <Pressable
            style={[
              styles.button,
              {
                borderColor: primaryColor2,
                borderWidth: 1,
                borderStyle: "solid",
              },
            ]}
            onPress={() => {
              navigation.navigate("Registration");
            }}
          >
            <Text style={{ textAlign: "center" }}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    width: 250,
    marginTop: 22,
    alignSelf: "center",
  },
  formView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 15,
    borderRadius: 20,
    alignSelf: "stretch",
    padding: 10,
    elevation: 2,
    backgroundColor: "#ffffff",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  Inputs: {
    borderColor: "black",
    borderWidth: 0.2,
    borderRadius: 6,
  },
});

export default Login;
