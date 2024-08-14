// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYXXM5lPwlJvjfgluOVNy-UHR0kv3pfYs",
  authDomain: "hspantryapp-rc.firebaseapp.com",
  projectId: "hspantryapp-rc",
  storageBucket: "hspantryapp-rc.appspot.com",
  messagingSenderId: "849286569264",
  appId: "1:849286569264:web:57ba585650b543dde23cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore}