// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const analytics = getAnalytics(app);

export default app;