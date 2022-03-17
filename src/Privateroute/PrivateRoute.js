import React from 'react'
import {Navigate} from 'react-router-dom'
import useAuth from '../Hooks/useAuth';

export default  function PrivateRoute({ children }) {
  
  const { user,isloading} = useAuth();
  console.log(user)
  if (isloading) {
    return "...loading";
  }
  return (
    user.email ? children : < Navigate to="/login" />
  ) 
    

  
}

