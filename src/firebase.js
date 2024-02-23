// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRxv6u7pO3xagGIP5zT92TjC6NXh4jeHk",
  authDomain: "todo-app-yt-77515.firebaseapp.com",
  projectId: "todo-app-yt-77515",
  storageBucket: "todo-app-yt-77515.appspot.com",
  messagingSenderId: "560474810893",
  appId: "1:560474810893:web:fc1b4c1a9aa11fabd88344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app)