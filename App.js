import * as React from "react"
import { View, Text, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "./Components/Home"
import Login from "./Components/Login"
import firebase from "firebase"
import fire from "./Config/fire"
import CheckAuth from "./Components/CheckAuth"
import Player from "./Components/Player"
const Stack = createStackNavigator()
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="CheckAuth"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="CheckAuth"
                    component={CheckAuth}
                    options={{ title: "Basic App" }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: "Home" }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: "Login" }}
                />
                <Stack.Screen name="play" component={Player} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
