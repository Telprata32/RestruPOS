// This page is the landing page upon signing into an account for the first time (i.e. First Time Setup)
import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { primaryColor1, primaryColor2 } from "../assets/Styles";

const Landing = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <LinearGradient
      colors={[primaryColor1, primaryColor2]}
      start={{ x: 1.5, y: -0.5 }}
      end={{ x: -0.5, y: 1.5 }}
      style={{ flex: 1 }}
    >
      <View style={styles.centeredView}>
        <View style={styles.formView}>
          <Text style={styles.textStyle}>
            This account has yet to add a restaurant profile, create one.
          </Text>
          <LinearGradient
            colors={[primaryColor1, primaryColor2]}
            start={{ x: 1.5, y: -0.5 }}
            end={{ x: -0.5, y: 1.5 }}
            style={styles.button}
          >
            <Text style={styles.buttonTextStyle}>+</Text>
          </LinearGradient>
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
    marginTop: 30,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    width: 100,
    height: 60,
    padding: 10,
    elevation: 2,
    backgroundColor: "#ffffff",
  },
  textStyle: {
    color: "#7C7C7C",
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 29,
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

export default Landing;
