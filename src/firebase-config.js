import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth } from "firebase/auth";

let key = process.env.REACT_APP_API_KEY;

const firebaseConfig = {
  apiKey: key,
  authDomain: "sarhan-redux.firebaseapp.com",
  databaseURL: "https://sarhan-redux-default-rtdb.firebaseio.com",
  projectId: "sarhan-redux",
  storageBucket: "sarhan-redux.appspot.com",
  messagingSenderId: "93036002516",
  appId: "1:93036002516:web:08fc612209930c77358f41",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
