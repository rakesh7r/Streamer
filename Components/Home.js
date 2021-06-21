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
import Player from "./Player"

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
                    DegPeg
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
                <Player mediaURL="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" />
                <Player mediaURL="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" />
            </ScrollView>
        </View>
    )
}
export default Home
