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
  apiKey: "AIzaSyAragPGT2l_su-l8CK7XNHNl6lVxcmgttQ",
  authDomain: "omerfarooqbinmehfooz.firebaseapp.com",
  databaseURL: "https://omerfarooqbinmehfooz-default-rtdb.firebaseio.com",
  projectId: "omerfarooqbinmehfooz",
  storageBucket: "omerfarooqbinmehfooz.appspot.com",
  messagingSenderId: "21331685610",
  appId: "1:21331685610:web:885654f0027cf83ac3a793",
  measurementId:  "G-P4BPN22LZB"
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
