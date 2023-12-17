// // Import the functions you need from the SDKs you need
// const  { initializeApp } = require('firebase/app');
// const firebase = require('firebase/app');
// require('firebase/firestore');
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// //const { getAuth } = require('firebase/auth');

// //const { getFirestore } = require('firebase/firestore'); 


const firebase = require('firebase/compat/app');
require('firebase/compat/firestore');

// // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvXm4QdQVyVBdURigu7yVeSrM0guWtois",
    authDomain: "insuralink-6715a.firebaseapp.com",
    projectId: "insuralink-6715a",
    storageBucket: "insuralink-6715a.appspot.com",
    messagingSenderId: "149543511405",
    appId: "1:149543511405:web:dd0d5a79a6491035a5a664"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
module.exports = db;

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //export const auth = getAuth(app);
// const db = firebase.firestore();
// module.export = db; 