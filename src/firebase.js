// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCURrf6ri_FZglPHYsTf_dVGUAw_cpPSPQ",
    authDomain: "chat-app-2022-91448.firebaseapp.com",
    projectId: "chat-app-2022-91448",
    storageBucket: "chat-app-2022-91448.appspot.com",
    messagingSenderId: "957627458454",
    appId: "1:957627458454:web:1a5f4b3c9d3dfcdfb5b3b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)