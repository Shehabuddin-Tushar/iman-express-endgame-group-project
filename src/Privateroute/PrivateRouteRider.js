import React, { useEffect, useState } from 'react'
import {Navigate} from 'react-router-dom'
import useAuth from '../Hooks/useAuth';

export default  function PrivateRouteRider({ children }) {
  
  const [ridertoken, setRidertoken] = useState("");

  useEffect(() => {

    const token = localStorage.getItem("riderToken");
    setRidertoken(token)


  }, []) 
  return (
    ridertoken!=null ? children : < Navigate to="/login" />
  ) 
    

  
}

