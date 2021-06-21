import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAew1JdrjfrldXuv-7Iu1jsx6fK0EB0qM8",
    authDomain: "degpeg-one.firebaseapp.com",
    projectId: "degpeg-one",
    storageBucket: "degpeg-one.appspot.com",
    messagingSenderId: "806221535365",
    appId: "1:806221535365:web:ce25a07d5500427b7b71ec",
    measurementId: "G-WC9LSHYK3Q",  
}
const fire = firebase.initializeApp(firebaseConfig)
export default fire
