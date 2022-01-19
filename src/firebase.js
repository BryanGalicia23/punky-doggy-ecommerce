import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtCHFmAwwvUFkY2jWkQlRa4Z4BXskdNVc",
  authDomain: "funky-doggy-ecommerce.firebaseapp.com",
  projectId: "funky-doggy-ecommerce",
  storageBucket: "funky-doggy-ecommerce.appspot.com",
  messagingSenderId: "898272842669",
  appId: "1:898272842669:web:3380e26a9edc6e87348724",
  measurementId: "G-BXVH15M9QR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
