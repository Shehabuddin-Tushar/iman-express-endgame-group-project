import { ContactSupportOutlined } from '@mui/icons-material';
import React,{useState,useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import useAuth from '../Hooks/useAuth';

export default  function PrivateRouteMerchant({ children }) {
  
  const [merchanttoken, setMerchanttoken] = useState("");

  useEffect(() => {
    
    const token = localStorage.getItem("merchant");
    setMerchanttoken(token)


  },[])
  return (
   merchanttoken!=null ? children : < Navigate to="/login" />
  ) 
    

  
}

