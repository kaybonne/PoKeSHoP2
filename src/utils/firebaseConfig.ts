import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAHspHYQXZy1lSMqZf-KNe0JsQwQSG5Xxc",
  authDomain: "pokeshop-e453a.firebaseapp.com",
  projectId: "pokeshop-e453a",
  storageBucket: "pokeshop-e453a.appspot.com",
  messagingSenderId: "154803308072",
  appId: "1:154803308072:web:c704c585b4c266e86d171d",
  measurementId: "G-FML86XYJ4S",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
export const firebaseDB = getFirestore(app)

export const usersRef = collection(firebaseDB, "users")
export const pokemonListRef = collection(firebaseDB, "pokemonList")

