// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPNn_zABb2bybgWJna8BNQ8a_BDsXwuWQ",
  authDomain: "netflix-82642.firebaseapp.com",
  projectId: "netflix-82642",
  storageBucket: "netflix-82642.firebasestorage.app",
  messagingSenderId: "113947197112",
  appId: "1:113947197112:web:92beaaeee6f20b194bfe4d",
  measurementId: "G-3D6TCBPQM1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);