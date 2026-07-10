 
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider}  from "firebase/auth"
// import GoogleAuthProvider  from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-74160.firebaseapp.com",
  projectId: "interviewiq-74160",
  storageBucket: "interviewiq-74160.firebasestorage.app",
  messagingSenderId: "694568820941",
  appId: "1:694568820941:web:914952d924383a4e758984"
};

 
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth, provider}