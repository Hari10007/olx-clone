import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCRT-kIQfESokZyxKgKjFNKrzrx5XyKWQ8",
  authDomain: "fir-c2aae.firebaseapp.com",
  projectId: "fir-c2aae",
  storageBucket: "fir-c2aae.appspot.com",
  messagingSenderId: "240873760189",
  appId: "1:240873760189:web:2d85af018525c8d7b0ded4",
  measurementId: "G-T90G92QHMC"
};

export default firebase.initializeApp(firebaseConfig)