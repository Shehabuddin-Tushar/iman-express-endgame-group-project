import React, { useEffect, useState } from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import success from '../../../img/success.gif';
import './Success.css';
import { useParams } from 'react-router';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import  axios  from 'axios';

const Success = () => {
    const {id}= useParams();
    
    const [order,setOrder]= useState([]);

    useEffect(()=>{
        fetch(`http://localhost:8080/api/payNow/orders/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOrder(data);
        })
    },[id])

    const validatePayment = () =>{
        console.log('clicked');
        const data = {
            tran_id : id,
            val_id: order?.val_id
        }
       axios.post(`http://localhost:8080/api/payNow/validate`,data)
       .then(res=>{
           console.log(res.data);
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
                <h1>See your invoice {order.cus_name} </h1>
                <h3>{order.product_name}</h3>
                <p>{order.product_image}</p>
                <p>{order.product_profile}</p>
                <p>{order.total_amount}</p>
            
                <Button
                onClick={validatePayment}
                variant='contained'
                >
                    Confirm Now
                </Button>
                </Grid>
            </Grid>
            </Container>

          
        </>
    );
};

export default Success;