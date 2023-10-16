import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

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
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
