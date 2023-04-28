// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbZo92GolDgxSjnXwH8ALMt8ziji81p1I",
  authDomain: "proyecto-react-8550b.firebaseapp.com",
  projectId: "proyecto-react-8550b",
  storageBucket: "proyecto-react-8550b.appspot.com",
  messagingSenderId: "675385037260",
  appId: "1:675385037260:web:d4f658a517698ac71c8d69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)