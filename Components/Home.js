import React from "react"
import { View, Text, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

function Home({ navigation }) {
    return (
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )
}
export default Home
