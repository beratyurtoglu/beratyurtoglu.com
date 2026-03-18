import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChgVXJasrdHgRC7-GMboMHKca_ekxf-04",
  authDomain: "beratportfolio.firebaseapp.com",
  projectId: "beratportfolio",
  storageBucket: "beratportfolio.firebasestorage.app",
  messagingSenderId: "137564120747",
  appId: "1:137564120747:web:5dc8bf6437199c480039ee",
  measurementId: "G-FH3C1E2LB3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
export default app;