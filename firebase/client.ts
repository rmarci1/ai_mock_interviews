import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD51bPOqw1h0hSVR18gyzOlVAUK01o6CxY",
  authDomain: "prepwise-f6554.firebaseapp.com",
  projectId: "prepwise-f6554",
  storageBucket: "prepwise-f6554.firebasestorage.app",
  messagingSenderId: "134314528169",
  appId: "1:134314528169:web:8f919360c71cbd449108b8",
  measurementId: "G-WNXV9YCGXH"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);