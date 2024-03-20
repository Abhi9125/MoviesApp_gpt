// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsXzzj9NpyXLJPMg5tMZx19IvyywVL_6w",
  authDomain: "netflix-gpt-2f635.firebaseapp.com",
  projectId: "netflix-gpt-2f635",
  storageBucket: "netflix-gpt-2f635.appspot.com",
  messagingSenderId: "678093238168",
  appId: "1:678093238168:web:5ba567d94208d8c6fd05ed",
  measurementId: "G-LT07KC0XTM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
