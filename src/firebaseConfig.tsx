// Import de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkygUKKjfM9LSS2pn06er5llbT0qIVVHc",
  authDomain: "mariagemenald.firebaseapp.com",
  projectId: "mariagemenald",
  storageBucket: "mariagemenald.firebasestorage.app",
  messagingSenderId: "956354981158",
  appId: "1:956354981158:web:dea8ee73319a83e65e25e7",
  measurementId: "G-V9L14NLT8D"
};
  

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

