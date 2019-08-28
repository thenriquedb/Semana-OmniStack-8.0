import React, { Component, useState, useEffect } from "react";
import {
  Text,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Platform
} from "react-native";

import asyncStorage from "@react-native-community/async-storage";

import api from "../services/api";
import logo from "../assets/logo.png";

export default function Login({ navigation }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    asyncStorage.getItem("user").then(user => {
      if (user) {
        navigation.navigate("Main", { user });
      }
    });
  });

  async function handleLogin() {
    const response = await api.post("/devs", { username: user });
    const { _id } = response.data;

    await asyncStorage.setItem("user", _id);

    navigation.navigate("Main", { _id });
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === "ios"}
      style={styles.container}
    >
      <Image source={logo} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={user}
        onChangeText={setUser}
        placeholderTextColor="#999"
        placeholder="Digite seu usuário do Github"
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}> Entrar </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 30
  },

  logo: {},

  input: {
    height: 46,
    alignSelf: "stretch",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#dddd",
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15
  },

  button: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#df4723",
    borderRadius: 4,
    justifyContent: "center",
    marginTop: 20,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
