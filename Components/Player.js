import React, { useState, useRef, useEffect } from "react"
import {
    View,
    StyleSheet,
    Button,
    Text,
    Image,
    TouchableWithoutFeedback,
} from "react-native"
import { Video, AVPlaybackStatus } from "expo-av"
import { Card } from "react-native-elements/dist/card/Card"
import * as VideoThumbnails from "expo-video-thumbnails"
import fire from "../Config/fire"
import firebase from "firebase"

function Player({ post }) {
    const video = React.useRef(null)
    const [status, setStatus] = React.useState({})
    const [image, setImage] = useState(post.thumbnail)
    const [isPlaying, setPlaying] = useState(false)

    // useEffect(async () => {
    //     try {
    //         const { uri } = await VideoThumbnails.getThumbnailAsync(
    //             "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    //             {
    //                 time: Math.random() * 1000,
    //             }
    //         )
    //         setImage(uri)
    //     } catch (e) {
    //         console.warn(e)
    //     }
    // }, [])
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
            {isPlaying ? (
                <TouchableWithoutFeedback
                // onPress={() => setPlaying(!isPlaying)}
                >
                    <Video
                        ref={video}
                        style={{ width: "100%", height: 200, marginTop: -25 }}
                        source={{
                            uri: post.mediaURL,
                        }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={(status) =>
                            setStatus(() => status)
                        }
                    />
                </TouchableWithoutFeedback>
            ) : (
                <TouchableWithoutFeedback
                    onPress={() => {
                        fire.firestore()
                            .collection("video-refs")
                            .doc(post.id)
                            .update({ Views: post.Views + 1 })
                        setPlaying(!isPlaying)
                    }}
                >
                    <View>
                        {image ? (
                            <Image
                                source={{ uri: post.thumbnail }}
                                style={{
                                    width: "100%",
                                    height: 200,
                                    marginTop: -25,
                                }}
                            />
                        ) : null}
                    </View>
                </TouchableWithoutFeedback>
            )}
            <Text style={{ fontSize: 15 }}>{post.name}</Text>
            <Text style={{ color: "gray", fontSize: 12 }}>
                {post.Views} Views
            </Text>
        </Card>
    )
}
export default Player
