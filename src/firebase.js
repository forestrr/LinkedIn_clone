import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoN3-PHWDb8ZY2qDVhIFiA3gMl8E2QbUk",
  authDomain: "linkedin-clone-19afb.firebaseapp.com",
  projectId: "linkedin-clone-19afb",
  storageBucket: "linkedin-clone-19afb.appspot.com",
  messagingSenderId: "852601101003",
  appId: "1:852601101003:web:5a9285cc28991809ef594e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp)
const auth =getAuth(firebaseApp)
export {db,auth}