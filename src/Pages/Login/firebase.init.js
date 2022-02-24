import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initAuth = () => {
  return initializeApp(firebaseConfig);
};

export default initAuth;
