// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC3PY4RP_kLDiS1lAiOcD89wBAX8f2f0pQ",
    authDomain: "realtor-9a8cd.firebaseapp.com",
    projectId: "realtor-9a8cd",
    storageBucket: "realtor-9a8cd.appspot.com",
    messagingSenderId: "998137875927",
    appId: "1:998137875927:web:977185d9e259b729d3cf92"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore