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
import {db} from '../Pages/Login/firebase.init'


import axios from "axios";
import Swal from "sweetalert2";
initAuth();
const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({})
  const [isloading, setIsloading] = useState(true);


 
  ///user state observer
  useEffect(() => {
    console.log(db)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
      //  console.log(user.email);
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
    setIsloading(true) 
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
      }).finally(() => {
       
        setIsloading(false);

      });;
  };

  ///login user
  const userLogin = (email, password, redirect, navigate) => {
    setIsloading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate(redirect);
        if (user?.email) {
         
          Swal.fire({
            icon: 'success',
            title: 'User Login Successfully',
          });
          
       
        }
      })
      .catch((error) => { }).finally(() => setIsloading(false));;
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



  useEffect(() => {
    setIsloading(true)
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {

        setUser(user)
      } else {
        setUser({})
      }

      setIsloading(false)
    });
    return unsubscribed;
  }
    , []);





  
  return {
    isloading,
    setIsloading,
    googleLogin,
    registerUser,
    userLogin,
    logOut,
    user
  };
};

export default useFirebase;
