// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFi-dy0in3x-XximIUFZhZJ1Dyp_wj5dU",
  authDomain: "find-intern-area.firebaseapp.com",
  projectId: "find-intern-area",
  storageBucket: "find-intern-area.appspot.com",
  messagingSenderId: "544233105514",
  appId: "1:544233105514:web:476e1708cec7e0b1c2c213",
  measurementId: "G-F8449ERYCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}