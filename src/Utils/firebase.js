// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHk_JEvBNsZwKu4oqZoagCG5ym7Sd_ZvQ",
  authDomain: "netflix-gpt-86b97.firebaseapp.com",
  projectId: "netflix-gpt-86b97",
  storageBucket: "netflix-gpt-86b97.appspot.com",
  messagingSenderId: "748955932160",
  appId: "1:748955932160:web:a1cefc6605a8bfbb4d2ae5",
  measurementId: "G-KKVHH2CJ8W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
