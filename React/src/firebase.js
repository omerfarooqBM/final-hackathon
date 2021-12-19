import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAragPGT2l_su-l8CK7XNHNl6lVxcmgttQ",
  authDomain: "omerfarooqbinmehfooz.firebaseapp.com",
  projectId: "omerfarooqbinmehfooz",
  storageBucket: "omerfarooqbinmehfooz.appspot.com",
  messagingSenderId: "21331685610",
  appId: "1:21331685610:web:885654f0027cf83ac3a793",
  measurementId: "G-P4BPN22LZB",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
