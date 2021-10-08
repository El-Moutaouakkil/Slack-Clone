// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAO0eggMhKOrca5vyY_mjTxB11KKehOHHY",
    authDomain: "slack-clone-0921.firebaseapp.com",
    projectId: "slack-clone-0921",
    storageBucket: "slack-clone-0921.appspot.com",
    messagingSenderId: "127871347641",
    appId: "1:127871347641:web:c40ffa2c6214963900e468",
};


const app = initializeApp(firebaseConfig);// Initialize Firebase
const db = getFirestore(app);;
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { db, auth, provider }; 