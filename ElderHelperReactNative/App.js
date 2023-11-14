import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { UserContext } from "./UserContext";

import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Map from "./Components/Map";
import SingleJob from "./Components/SingleJob";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="SingleJob" component={SingleJob} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <UserContext>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </UserContext>
  );
}