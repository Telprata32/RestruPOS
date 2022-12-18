import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";

const Login = () => {
  const [email, changeMail] = useState("");
  return (
    <View style={styles.centeredView}>
      <View>
        <View style={styles.centeredView}>
          <View style={styles.formView}>
            <Text>Email</Text>
            <TextInput
              onChangeText={changeMail}
              value={email}
              style={styles.Inputs}
            />
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Pressable style={[styles.button, { marginEnd: 10 }]}>
                <Text style={styles.buttonTextStyle}>Login</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.buttonTextStyle}>cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  formView: {
    margin: 20,
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
    borderRadius: 20,
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
    color: "rgb(247,72,115)",
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
