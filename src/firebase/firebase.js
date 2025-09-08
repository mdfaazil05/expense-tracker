// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFmNC5L5kf_OYCsLQLXDA8wljrb3poyyo",
  authDomain: "expense-tracker-ca58e.firebaseapp.com",
  projectId: "expense-tracker-ca58e",
  storageBucket: "expense-tracker-ca58e.firebasestorage.app",
  messagingSenderId: "869919902552",
  appId: "1:869919902552:web:000c3e8f71c7cf1d9db32d",
  measurementId: "G-5FDXBHNN55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };