import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8cexYH0QEnn4Y77PXtH79cswxitvo8SQ",
  authDomain: "applestore-8155a.firebaseapp.com",
  projectId: "applestore-8155a",
  storageBucket: "applestore-8155a.appspot.com",
  messagingSenderId: "210812825154",
  appId: "1:210812825154:web:03929c04b36f72a7b807db",
  measurementId: "G-SXSL5GNVZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth
