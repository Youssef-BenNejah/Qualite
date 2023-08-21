// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjcDUFNXdYtrhLCzyhpDsbEqULJKomTA8",
  authDomain: "qualite-75e87.firebaseapp.com",
  projectId: "qualite-75e87",
  storageBucket: "qualite-75e87.appspot.com",
  messagingSenderId: "507947868571",
  appId: "1:507947868571:web:e79b7ae8de8478066cc13e",
  measurementId: "G-HNT0JKSE6J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);