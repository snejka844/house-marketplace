// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUwYzREnOhmkucyDboM3kF3VgxTVtrx4o",
  authDomain: "house-marketplace-app-6fba4.firebaseapp.com",
  projectId: "house-marketplace-app-6fba4",
  storageBucket: "house-marketplace-app-6fba4.appspot.com",
  messagingSenderId: "953611726836",
  appId: "1:953611726836:web:f9503f412912ed3eb093a1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();