import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  View,
  Button,
  Alert,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const [numberLogin, onChangeNumberLogin] = React.useState("");
  const [passwordLogin, onChangePasswordLogin] = React.useState("");
  return (
    <SafeAreaView style={{ backgroundColor: "#9DD8E7", flex: 0 }}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 50,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 140,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Log in
        </Text>

        <View>
          <Text style={style.label}>Phone Number</Text>
          <View style={[style.inputContainer]}>
            <Ionicons style={style.icon} name="person-outline" size={24} />
            <TextInput
              style={style.input}
              onChangeText={onChangeNumberLogin}
              value={numberLogin}
            />
          </View>
        </View>
        <View>
          <Text style={style.label}>Password</Text>
          <View style={[style.inputContainer]}>
            <AntDesign
              style={style.icon}
              name="lock1"
              size={24}
              color="black"
            />
            <TextInput
              style={style.input}
              onChangeText={onChangePasswordLogin}
              value={passwordLogin}
            />
          </View>
        </View>
        <View>
          <Pressable style={style.button}>
            <Text style={style.text}> Log in</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

{
}

const style = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 30,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
  },
  inputContainer: {
    height: 60,
    marginBottom: 10,
    backgroundColor: "#D6EAEE",
    flexDirection: "row",
    marginHorizontal: 15,
    borderWidth: 0.5,
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
    color: "#C0C0C0",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    padding: 15,
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#0072BB",
    width: 180,
    height: 50,
    flex: "row",
  },
  text: {
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 10,
    fontSize: 22,
    color: "white",
  },
});
