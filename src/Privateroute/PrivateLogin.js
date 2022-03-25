import React from 'react'
import {Navigate} from 'react-router-dom'
import useAuth from '../Hooks/useAuth';

export default  function PrivateLogin({ children }) {
  
  const { user, isloading } = useAuth();
  const merchant = localStorage.getItem("merchant");
  const rider = localStorage.getItem("riderToken");
  
  
  return (
    !user?.email || merchant===null || rider===null ? children : < Navigate to="/" />
  ) 
    

  
}

