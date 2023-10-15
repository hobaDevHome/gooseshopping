// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoRf0nn5q8EH8oSRC0MGHH3kkwqFoT6Og",
  authDomain: "sarhan-redux.firebaseapp.com",
  databaseURL: "https://sarhan-redux-default-rtdb.firebaseio.com",
  projectId: "sarhan-redux",
  storageBucket: "sarhan-redux.appspot.com",
  messagingSenderId: "93036002516",
  appId: "1:93036002516:web:08fc612209930c77358f41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
