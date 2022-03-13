import { Button, Container,Grid,Box} from "@mui/material";
import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import BillingDetails from "./BillingDetails";
import Order from "./Order";
import { useParams } from 'react-router-dom';

function Checkout() {

  const { id } = useParams();
  const [localdata,setLocaldata]=useState([])
  const [totalamount, setTotalamount] = useState(0);
  const [totalamountwithtax, setTotalamountwithtax] = useState(0);
  useEffect(() => {
    let mylocalproductdata = JSON.parse(localStorage.getItem(`imanxpresscart-${id}`)) ? JSON.parse(localStorage.getItem(`imanxpresscart-${id}`)) : []
  
    setLocaldata(mylocalproductdata)

    let amount = 0
    for (let pro of mylocalproductdata) {
      amount = (amount + pro.productprice * pro.count)
    }
    setTotalamount(amount)
    setTotalamountwithtax(Math.round(amount + amount * 15 / 100))
  },[])
 
  const { register, handleSubmit } = useForm();
    const [checked, setChecked] = useState('')
    console.log(checked)
  // handleCheck
  const handleCheck = (e) => {
       setChecked(e.target.checked)
    }
    
  const onSubmit =  (data) => {
  
    data.ordersdata = localdata
    data.totalamountwithtaxandshipping = totalamountwithtax+200
    console.log(data)

    const order = {
      cus_name: data.fname+','+data.lname,
      cus_email: data.email,
      cus_city: data.city,
      note:data.note,
      cus_postcode: data.postalCode,
      streetAddress: data.streetAddress,
      merchant_id: data.ordersdata[0].merchantid,
      product_name: JSON.stringify(data.ordersdata),
      product_profile: "product_profile",
      product_image: "product_image",
      total_amount: totalamountwithtax+200,
      cus_phone: data.phone,

  

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
        >  
         <BillingDetails register={register}></BillingDetails>          
                
        </Grid>    <Grid item xs={12} md={6} lg={6}>
                            <Box sx={{ py: 5, textAlign: "center" }}>
                            
                           <Order handleCheck={handleCheck} allproduct={localdata} totalamount={totalamount} totalwithtax={totalamountwithtax}></Order>
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