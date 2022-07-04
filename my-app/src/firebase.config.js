import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCeDPVtgFqOYMlW9OVC3WCg-65pMl27qsg",//make a env file to store API key avoid from stolen key from CLIENTS
    authDomain: "reactproject-ac1dc.firebaseapp.com",
    projectId: "reactproject-ac1dc",
    storageBucket: "reactproject-ac1dc.appspot.com",
    messagingSenderId: "6817744426",
    appId: "1:6817744426:web:582dfac16d66953238e553",
    measurementId: "G-D17HY37W01"
  };
  const app = initializeApp(firebaseConfig);
  export const db =getFirestore(app)
  //by creating a variable connecting to backened API  by importing to react and exporting here;
  