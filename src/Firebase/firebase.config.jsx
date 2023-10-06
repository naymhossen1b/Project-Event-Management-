// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfO0Ej-QqjgnOWp9LbKGAcGW355ePiOps",
  authDomain: "entertainment-event-managment.firebaseapp.com",
  projectId: "entertainment-event-managment",
  storageBucket: "entertainment-event-managment.appspot.com",
  messagingSenderId: "809122815153",
  appId: "1:809122815153:web:c37fd389e1ec8bcf9e9690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;