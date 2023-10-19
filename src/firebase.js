// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD6A6YX-5GO5Kp0gWSlBN9edX_4EeLvJ4Y",
  authDomain: "fake-store-ecf94.firebaseapp.com",
  projectId: "fake-store-ecf94",
  storageBucket: "fake-store-ecf94.appspot.com",
  messagingSenderId: "1033425745350",
  appId: "1:1033425745350:web:e06d576a7a74c0156eeec7",
  measurementId: "G-H8PCPEV26X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth()
export {app,auth}