import React, { useState, useEffect } from "react"
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native"
import fire from "../Config/fire"
const Login = () => {
    const [hasAccount, setHasAccount] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const handleLogin = () => {
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => setUser(user))
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-defined":
                        setError(err.message)
                        break
                    case "auth/wrong-password":
                        setError(err.message)
                        break
                    default:
                        setError(err.message)
                        break
                }
            })
    }
    const handleSignup = () => {
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => setUser(user))
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setError(err.message)
                        break
                    case "auth/weak-password":
                        setError(err.message)
                        break
                    default:
                        setError(err.message)
                        break
                }
            })
    }
    return (
        <View
            style={{
                backgroundColor: "#dbd9db",
                height: "100%",
                padding: 12,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <View
                style={{
                    backgroundColor: "white",
                    padding: 27,
                    borderRadius: 10,
                    marginTop: -15,
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                        marginBottom: 15,
                    }}
                >
                    {hasAccount ? (
                        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                            Sign in
                        </Text>
                    ) : (
                        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                            Sign up
                        </Text>
                    )}
                </View>
                <TextInput
                    style={styles.textField}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    defaultValue={email}
                />
                <TextInput
                    style={styles.textField}
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    defaultValue={password}
                />
                {hasAccount ? (
                    <Button title="Sign In" onPress={handleLogin} />
                ) : (
                    <Button title="Sign Up" onPress={handleSignup} />
                )}
                <TouchableOpacity
                    style={{
                        marginTop: 17,
                        alignItems: "center",
                    }}
                    onPress={() => setHasAccount(!hasAccount)}
                >
                    {hasAccount ? (
                        <Text>
                            Dont Have an Account ?{" "}
                            <Text style={{ fontWeight: "bold" }}>Sign up</Text>
                        </Text>
                    ) : (
                        <Text>
                            Already Have an Account ?{" "}
                            <Text style={{ fontWeight: "bold" }}>Sign in</Text>
                        </Text>
                    )}
                </TouchableOpacity>
                {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    textField: {
        width: "100%",
        backgroundColor: "white",
        height: 60,
        borderRadius: 7,
        padding: 15,
        borderColor: "#ccc",
        borderWidth: 1,
        borderStyle: "solid",
        marginBottom: 15,
    },
})
export default Login
