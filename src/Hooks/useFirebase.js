import React, { useEffect } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import initAuth from "../Pages/Login/firebase.init";
initAuth();
const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  ///user state observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log(user);
      } else {
        // User is signed out
      }
    });
  }, []);

  ///google login
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  ///logOUt
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    googleLogin,
    logOut,
  };
};

export default useFirebase;
