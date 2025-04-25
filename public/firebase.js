// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8hnjo4MQ-d_i_30I-coDleZHsB5F7fTQ",
  authDomain: "link-5992e.firebaseapp.com",
  projectId: "link-5992e",
  storageBucket: "link-5992e.firebasestorage.app",
  messagingSenderId: "737961075989",
  appId: "1:737961075989:web:91fc500b150bfae822b51c",
  measurementId: "G-5CZ5301NF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);