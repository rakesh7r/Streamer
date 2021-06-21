import React from "react"
import {
    View,
    Text,
    Button,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Header } from "react-native-elements/dist/header/Header"
import fire from "../Config/fire"
import VideoCard from "./Card"

function Home({ navigation }) {
    return (
        <View>
            <StatusBar backgroundColor="#304C57" />
            <View
                style={{
                    backgroundColor: "#264653",
                    padding: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text
                    style={{
                        padding: 4,
                        color: "white",
                        fontSize: 22,
                        fontWeight: "bold",
                    }}
                >
                    Basic App
                </Text>
                <TouchableOpacity
                    style={{ padding: 10 }}
                    onPress={() => {
                        fire.auth().signOut()
                    }}
                >
                    <Text style={{ color: "white" }}>Sign out</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <VideoCard navigation={navigation} />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </ScrollView>
        </View>
    )
}
export default Home
