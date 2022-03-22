import { Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const {user} = useAuth();

    
    const handleMakeAdmin = e =>{
        const userEmail = {email}
        fetch('http://localhost:8080/api/authgeneral/getallusers/admin',{
            method:"PUT",
            headers:{
                'content-type':'application/json'
                    },
            body:JSON.stringify(userEmail)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, make ADMIN!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Wow Congratulation!',
                        `[${email}] is an ADMIN now`,
                      )
                    }
                    else{
                        Swal.fire('Dicision canceled successfully!'
                          )
                    }
                  })
                  e.target.reset();
            }

        })
        e.preventDefault();
    }

    const handleOnBlur=e=>{
        setEmail(e.target.value)
        console.log(e.target.value);
}
    return (
        <>
            <Typography variant="h5" color='white' sx={{p:1,mt:5,backgroundColor:'#1565C0', textAlign:'center', border:'1px solid black'}}>
            Make an admin to your page
            </Typography>
            <form onSubmit={handleMakeAdmin}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                   <img width='550px' src="https://i.pinimg.com/originals/b6/6e/8f/b66e8ffa547746f4085ecc197cd588b9.gif" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField
                    onBlur={handleOnBlur}
                    type="email"
                    color="primary" 
                    sx={{width:'350px',mt:10,color:"primary"}}
                    label="Type a registered email address"
                    /> <br /> <br />  
                    <Button type="submit" sx={{mx: "auto" }} variant="contained">
                        Make Admin
                    </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default MakeAdmin;