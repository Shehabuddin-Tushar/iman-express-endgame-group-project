import {
   
    Button,
    Container,
    Divider,
    Grid,
     Box,    
    TextField,
    Typography,
} from "@mui/material";

import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Nav from "../../DashBoard/Dashboard/Dashboard";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import BillingDetails from "./BillingDetails";
import Order from "./Order";

function Checkout() {
  const { register, handleSubmit, reset ,formState: { errors }  } = useForm();
    const [checked, setChecked] = useState('')
    console.log(checked)
  // handleCheck
  const handleCheck = (e) => {
       setChecked(e.target.checked)
    }
    
  const onSubmit =  async(data) => {
  
      console.log(data)
  
      
    // axios.post('https://iman-xpress.herokuapp.com/api/auth/register', data).then(res => {
    //     console.log(res.data.authToken)
       
          
    //       console.log(data);
    //       Swal.fire({
    //         icon: 'success',
    //         title: 'Merchant Registered Successfully',
    //       });
       
    //   }).catch(err => console.log(err))
    //    reset()
    };
    return (
        <div>
            <Navbar></Navbar>
            <Container sx={{my:4}}><form onSubmit={handleSubmit(onSubmit)}>
      <Grid
         container
         spacing={5}
      > 
        <Grid
                            item
                            xs={12} md={6} lg={6}
        >   <BillingDetails register={register}></BillingDetails>          
                
        </Grid>    <Grid item xs={12} md={6} lg={6}>
                            <Box sx={{ py: 5, textAlign: "center" }}>
                            
                           <Order handleCheck={handleCheck}></Order>
                           <Box sx={{ textAlign: "left", my: 3 }}>
              <Button fullWidth variant="outlined" color="warning" type="submit">
                Place Order
              </Button>
            </Box>
                        </Box>  
                
                    </Grid>
                </Grid>
                    </form>
            </Container>
            <Footer></Footer>
    </div >
  )
}

export default Checkout