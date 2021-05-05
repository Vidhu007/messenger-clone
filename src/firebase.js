import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCxZDaPQAEzoLOnpiaYIFLonLpVkcjNJLI",
    authDomain: "facebook-messenger-clone-dc9c0.firebaseapp.com",
    projectId: "facebook-messenger-clone-dc9c0",
    storageBucket: "facebook-messenger-clone-dc9c0.appspot.com",
    messagingSenderId: "997406604864",
    appId: "1:997406604864:web:a139cfe84cd9e51149e9a5",
    measurementId: "G-K1N93JC8GK"
  });

  const db = firebaseApp.firestore()
  export default db;