import React from 'react';
import useFirebase from './../../Hooks/useFirebase';


const PayNow = () => {
    const {user}= useFirebase();


const handleBuyNow = ()=>{
    const order = {
      
        total_amount: "100",

    }
 fetch(`http://localhost:8080/api/payNow/init`,{
     method: 'POST',
     headers: {
         "content-type": "application/json"
     },
     body: JSON.stringify(order)
 })
 .then(res=>res.json())
 .then(data=>{
     window.location.replace(data);
 })
}

    return (
        <div>
            <h3> Hello {user.displayName} </h3>
            <button onClick={handleBuyNow} >Pay now</button>
        </div>
    );
};

export default PayNow;