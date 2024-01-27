// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ca442.firebaseapp.com",
  projectId: "mern-blog-ca442",
  storageBucket: "mern-blog-ca442.appspot.com",
  messagingSenderId: "1009812972467",
  appId: "1:1009812972467:web:ef9c86676f8dd5946de1c6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
