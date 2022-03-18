
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { initializeApp } from "firebase/app";

import firebaseConfig from "./firebase.config";

const initAuth = () => {
  return initializeApp(firebaseConfig);
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore();

export default initAuth;
