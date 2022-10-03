
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAWUWN_vcBXEFp-fss6u1yAJxPMYlTh69Y",
  authDomain: "dbcommercems.firebaseapp.com",
  projectId: "dbcommercems",
  storageBucket: "dbcommercems.appspot.com",
  messagingSenderId: "634569266969",
  appId: "1:634569266969:web:d6b85b41f0c5132fa29788",
  measurementId: "G-SEEJJ6KSKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);