import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import fire from "../Config/fire"
import Home from "./Home"
import Login from "./Login"
const CheckAuth = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const unsubscribe = fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <View>
            {user ? (
                <View>
                    <Home />
                </View>
            ) : (
                <View>
                    <Login />
                </View>
            )}
        </View>
    )
}

export default CheckAuth
