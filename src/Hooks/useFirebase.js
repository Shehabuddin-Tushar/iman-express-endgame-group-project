import React, { useEffect ,useState} from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import initAuth from '../Pages/Login/firebase.init'
import axios from "axios";
initAuth();
const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user,setUser]=useState({})
  
  ///user state observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        // console.log(user);
        setUser(user)

      } else {
        // User is signed out
      }
    });
  }, []);

  ///google login
  const googleLogin = (redirect, navigate) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // ...
        navigate(redirect);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  ///new User register
  const registerUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        saveuser(email,password)
        // Signed in
        const user = userCredential.user;
        // ...
        updateUser(name);
        const newUser = {
          displayName: name,
          email: user.email,
        };
        newUserInfo(newUser);
      })
      .catch((error) => {
        // ..
      });
  };

  ///login user
  const userLogin = (email, password, redirect, navigate) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate(redirect);
      })
      .catch((error) => {});
  };
  ///logOUt
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({})
      })
      .catch((error) => {
        // An error happened.
      });
  };

  ///user info post to server
  const newUserInfo = (newUser) => {
    axios.post("/", newUser).then((res) => {
      ///save to database
    });
  };

  ///update user profile
  const updateUser = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  /**user save in database */

  const saveuser = (email, password) => {
    const userdata = {
      email: email,
      password: password,
      role: "viewer"
    }
    fetch("https://iman-xpress.herokuapp.com/api/authgeneral/saveuser", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userdata)
    }).then(res => res.json()).then(data => console.log(data))
  }
/**user save in database end */

  return {
    googleLogin,
    registerUser,
    userLogin,
    logOut,
    user
  };
};

export default useFirebase;
