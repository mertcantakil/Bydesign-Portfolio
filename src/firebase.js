// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk8gEEIHpUsP4eR_lujbeTPsbWk0nmPQE",
  authDomain: "bydesign-2635.firebaseapp.com",
  projectId: "bydesign-2635",
  storageBucket: "bydesign-2635.firebasestorage.app",
  messagingSenderId: "909358238381",
  appId: "1:909358238381:web:6b4742b01ae799d317d424",
  measurementId: "G-1PVEJ2PWCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);