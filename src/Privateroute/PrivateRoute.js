import React from 'react'
import {Navigate} from 'react-router-dom'
import useAuth from '../Hooks/useAuth';

export default  function PrivateRoute({ children }) {
  
  const { user } = useAuth();
  console.log(user)
  return (
    user.email ? children : < Navigate to="/login" />
  ) 
    

  
}

