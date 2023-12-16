// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvXm4QdQVyVBdURigu7yVeSrM0guWtois",
    authDomain: "insuralink-6715a.firebaseapp.com",
    projectId: "insuralink-6715a",
    storageBucket: "insuralink-6715a.appspot.com",
    messagingSenderId: "149543511405",
    appId: "1:149543511405:web:dd0d5a79a6491035a5a664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
