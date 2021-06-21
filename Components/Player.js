import React, { useState, useRef } from "react"
import { View, StyleSheet, Button, Text } from "react-native"
import { Video, AVPlaybackStatus } from "expo-av"
import { Card } from "react-native-elements/dist/card/Card"
import * as VideoThumbnails from "expo-video-thumbnails"

function Player({ mediaURL }) {
    const video = React.useRef(null)
    const [status, setStatus] = React.useState({})
    const [image, setImage] = useState(null)
    const generateThumbnail = async () => {
        try {
            const { uri } = await VideoThumbnails.getThumbnailAsync(mediaURL, {
                time: 15000,
            })
            setImage(uri)
        } catch (e) {
            console.warn(e)
        }
    }
    return (
        <Card style={{ marginTop: 20, width: "100%" }}>
            <View
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    zIndex: 9,
                    marginTop: 7,
                }}
            >
                <Text
                    style={{
                        backgroundColor: "red",
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 4,
                        paddingBottom: 4,
                        borderRadius: 4,
                        zIndex: 10,
                        color: "white",
                    }}
                >
                    Live
                </Text>
            </View>
            <Video
                ref={video}
                // style={styles.video}
                style={{ width: "100%", height: 200, marginTop: -25 }}
                source={{
                    // uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                    uri: mediaURL,
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />

            <View style={{ marginTop: 4 }}>
                <Text>Video Details | Name | Channel or oganization</Text>
            </View>
        </Card>
    )
}
export default Player
