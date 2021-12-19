import * as firebase from '@firebase/app';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU4qTBIg5csq8w8Zy1IijTIWprXhitqU4",
  authDomain: "project-hassan.firebaseapp.com",
  projectId: "project-hassan",
  storageBucket: "project-hassan.appspot.com",
  messagingSenderId: "911370152283",
  appId: "1:911370152283:web:3f142846a2a0b4e936527e",
  measurementId: "G-TET5FSGR1Q"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
  firebase,
  db,
  auth,
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
};
