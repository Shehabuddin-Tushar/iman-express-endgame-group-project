import React, { useEffect, useState } from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import success from '../../../img/success.gif';
import './Success.css';
import { useParams } from 'react-router';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import  axios  from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Success = () => {
    const {id}= useParams();
    
    const [order,setOrder]= useState([]);

    useEffect(()=>{
        fetch(`http://localhost:8080/api/payNow/orders/${id}`)
        .then(res => res.json())
        .then(data => {
            setOrder(data);
        })
    },[id])

    const validatePayment = () =>{
        const data = {
            tran_id : id,
            val_id: order.val_id
        }
        console.log(data)
       axios.post(`http://localhost:8080/api/payNow/validate`,data)
       .then(res => {
          
           if(res.data === true){
            toast.success("Payment Confirmed successfully",{
                theme: "dark"
            })
           }
           else{
            toast.warn('Already Confirmed or Payment Failed',{
                theme: "dark"
            })
           }
       })
    }
    return (
        <>
            <Navbar></Navbar>
            <Container>
            <Grid  container spacing={2}>
                <Grid  item xs={12} md={6} sm={12} lg={6} >
                <div className='success'>
           <h1>Congratulations,Payment Successfull</h1>
            <img width={'350px'} src={success} alt="" />
           </div>
                
                </Grid>
                <Grid  item xs={12} md={6} sm={12} lg={6} sx={{boxShadow:6}}>
                <h1>See your invoice {order.cus_name}</h1>
                 <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
                <p>Date: {order.date} </p>
                <p>Payment Status: <b>{order.payment_status}</b> </p> 
                <h3>Your Merchant ID: {order.merchant_id}</h3>
                <p>Total Phone: {order.cus_phone}</p>
                <p>Total Email: <b>{order.cus_email}</b></p>
                <p>Total Ammount: BDT <b>{order.total_amount}</b></p>
                <p>Your tran_id: <b>{order.tran_id}</b></p>
                <p>City: {order.cus_city}</p>
                <p>Postcode: {order.cus_postcode}</p>
                <p>Street Address: {order.streetAddress}</p>
            
                <Button
                onClick={validatePayment}
                variant='contained'
                >
                    Confirm Payment
                </Button>
                </Grid>
            </Grid>
            </Container>

          
        </>
    );
};

export default Success;