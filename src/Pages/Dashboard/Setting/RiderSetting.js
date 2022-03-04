import { Button, Card, CardContent, CardHeader, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const RiderSetting = () => {
    const { register, handleSubmit, reset } = useForm();
    const [password, setPassword] = useState({password: "",confirmPassword: ""});
    console.log(password);
    // rider data fetch from local storage
        const rider = localStorage.getItem('riderInfo')
    const riderInfo = JSON.parse(rider)
    console.log(riderInfo);
    
    // submit
    const onSubmit = (data) => {
        console.log('data',password.password);
        data.password=  password.password
        if (password.password === password.confirmPassword) {
            axios.post(`http://localhost:8080/api/riderProfile/updateRiderPass/${riderInfo.email}`, data).then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                  console.log(data);
                  Swal.fire({
                    icon: 'success',
                    title: 'Rider Password Updated Successfully',
                  });
                }
                }).catch(err=>console.log(err))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Please match Your Password',
              });
      }
    };
       // handle password confirm
       const handlePassword = (e)=>{
        setPassword({
            ...password,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <Box
      component="main"
      sx={{
        flexGrow: 1,
          py: 8,
         
        
      }}
    >
            <Container maxWidth="lg">
                
        
        <Grid
          container
          spacing={3}  sx={{ display: 'flex', justifyContent: 'center',
          alignItems:'center'}}
        >
      
          <Grid
            item
            lg={8}
            md={8}
            xs={12}
          >
            <div><Typography
          sx={{ mb: 3, }}
          variant="h4"   fontWeight="bold"
        >
          Setting
        </Typography>
     <form
     
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card>
        <CardHeader
           subheader="Update password"
           title="Password"
         />
      
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >  <Grid
              item
              md={12}
              xs={12}
                      >
                        
          <TextField
            fullWidth
           label="Password"                             
            name="password"       
                              type="password"
                          onChange={handlePassword}
       
            defaultValue={riderInfo?.password}
                              variant="outlined"
                              required
          />
          <TextField
            fullWidth   margin='normal'  
            label="Confirm password"           
            name="confirmPassword"           
                              type="password"
                              onChange={handlePassword}
           required
            variant="outlined"
          />
       
            </Grid>
                      
          </Grid>
        </CardContent>
        <Divider/>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button type='submit'
            color="primary"
            variant="contained"
          >
           Update
          </Button>
        </Box>
      </Card>
    </form>
        </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
    );
};

export default RiderSetting;