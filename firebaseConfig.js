// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase project settings
const firebaseConfig = {
  apiKey: "AIzaSyD-p0fTFKwmxzcsBBzcgWg5wJp3ft4IdeE",
  authDomain: "slayrate3.firebaseapp.com",
  projectId: "slayrate3",
  storageBucket: "slayrate3.firebasestorage.app",
  messagingSenderId: "782380810563",
  appId: "1:782380810563:web:d336edf5359769049b6ff6"
};

// Initialize Firebase and services
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
