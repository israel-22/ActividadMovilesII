// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcmAjme9t0KkTpqthDO6x3lr2GewBzDmA",
  authDomain: "prueba-18af0.firebaseapp.com",
  databaseURL: "https://prueba-18af0-default-rtdb.firebaseio.com",
  projectId: "prueba-18af0",
  storageBucket: "prueba-18af0.appspot.com",
  messagingSenderId: "197594526083",
  appId: "1:197594526083:web:8a11aa3d5c7cc9106806b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
//export const auth = getAuth(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const storage = getStorage(app);