import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDRE4S_J3ReesoHKLmjiKZ_j20Q42pPPW0",

  authDomain: "catroms.firebaseapp.com",

  projectId: "catroms",

  storageBucket: "catroms.appspot.com",

  messagingSenderId: "99673797018",

  appId: "1:99673797018:web:c8953a7d4fe19191a9ca23",

  measurementId: "G-NVVEYM2Z57"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
import { initializeApp } from "firebase/app";
export {auth}