// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1nokjmZ6pucgWp3_6qb3TRRNOlVnNYeM",
  authDomain: "catalog-7f4c3.firebaseapp.com",
  projectId: "catalog-7f4c3",
  storageBucket: "catalog-7f4c3.firebasestorage.app",
  messagingSenderId: "1091564697961",
  appId: "1:1091564697961:web:2480078969065fb460a5f8"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export {auth};