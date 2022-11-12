import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyBXX1w5RXTvZ462eZLSiUTh-v4orVUoNrs",
    authDomain: "clone-3bea7.firebaseapp.com",
    projectId: "clone-3bea7",
    storageBucket: "clone-3bea7.appspot.com",
    messagingSenderId: "651045287503",
    appId: "1:651045287503:web:27de6a14bb3dcbb8ae1c3a"
});



const bd= firebaseApp.firestore();
const auth= firebase.auth();

export {bd,auth};