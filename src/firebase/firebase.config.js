// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApyeSYeelbCZxYcxPFupm1anASBiEPS2A",
  authDomain: "fir-first-concept.firebaseapp.com",
  projectId: "fir-first-concept",
  storageBucket: "fir-first-concept.firebasestorage.app",
  messagingSenderId: "913976148585",
  appId: "1:913976148585:web:43699e67328055bebbd8f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export default auth