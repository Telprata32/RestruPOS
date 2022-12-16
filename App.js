import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStacNavigator } from "@react-navigation/native-stack";
// import { Login } from "./Pages/Login";

const Stack = createNativeStacNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerMode: "screen", headerTintColor: "teal" }}
      >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
