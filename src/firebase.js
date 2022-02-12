import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCyd2sDukPagtl8dQNjdVVpQtAXXvqndbU",
    authDomain: "challenge-27e2f.firebaseapp.com",
    projectId: "challenge-27e2f",
    storageBucket: "challenge-27e2f.appspot.com",
    messagingSenderId: "565638847130",
    appId: "1:565638847130:web:d623094bad8bab6e0ddd23",
    measurementId: "G-9PDLS659R6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  // real time database
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
