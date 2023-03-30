// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9EVDFND0pmMBqbdhT89l4oEEVllCPezw",
  authDomain: "book-project-ee96f.firebaseapp.com",
  projectId: "book-project-ee96f",
  storageBucket: "book-project-ee96f.appspot.com",
  messagingSenderId: "882451589878",
  appId: "1:882451589878:web:b60a51a3d52b2b9055dad7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
