/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  collection,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDPstgxAj-uWTrZsCCNdf8r4E5Gz-pTNeg',
  authDomain: 'netflix-clone-ca6e8.firebaseapp.com',
  projectId: 'netflix-clone-ca6e8',
  storageBucket: 'netflix-clone-ca6e8.appspot.com',
  messagingSenderId: '364149681746',
  appId: '1:364149681746:web:9defc38587a5219fa8b98b',
  measurementId: 'G-EWDGD0EXEN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// is there a better way to import export all these?
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
};
export default db;