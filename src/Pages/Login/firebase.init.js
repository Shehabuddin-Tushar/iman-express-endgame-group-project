import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { getFirestore } from "firebase/firestore";


const initAuth = () => {
  return initializeApp(firebaseConfig);
};

export const db = getFirestore(initAuth());

export default initAuth;
