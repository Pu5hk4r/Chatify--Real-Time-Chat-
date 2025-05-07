import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyDf5eGOv-0VgTxUPbOlZfQLlq9AICcFktk",
  authDomain: "chatify-pushkar.firebaseapp.com",
  projectId: "chatify-pushkar",
  storageBucket: "chatify-pushkar.firebasestorage.app",
  messagingSenderId: "18548285624",
  appId: "1:18548285624:web:09596edaf1c25a6f95944d"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
