// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJVDDY7WlJ-q0-ImHy_NK6IP6vd9oRST8",
  authDomain: "budgetbuddy001-1eede.firebaseapp.com",
  projectId: "budgetbuddy001-1eede",
  storageBucket: "budgetbuddy001-1eede.appspot.com",
  messagingSenderId: "701391581364",
  appId: "1:701391581364:web:385d12fd9a906fd863e7e1",
  measurementId: "G-6LT95C68JW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Added
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export{ db, auth, provider, doc, setDoc}

