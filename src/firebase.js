import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0CglZW2W9qud3eXqNWMjUjaeNcqNmvQw",
    authDomain: "myntra-clone-17a32.firebaseapp.com",
    projectId: "myntra-clone-17a32",
    storageBucket: "myntra-clone-17a32.appspot.com",
    messagingSenderId: "490181939864",
    appId: "1:490181939864:web:07704c45b9a5ac2de4b6ed",
    measurementId: "G-7L3GV72Y6F"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

  