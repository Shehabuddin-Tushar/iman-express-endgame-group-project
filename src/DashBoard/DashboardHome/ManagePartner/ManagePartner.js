import { Container, Grid } from '@mui/material';
import React , { useState,useEffect } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

const ManagePartner = () => {
    const [partners,setPartners] = useState([]);
    const [partnerApi, setPartnerApi] = useState([])
  
  useEffect(()=>{
    fetch('https://iman-xpress-backend-theta.vercel.app/api/partner/getPartner')
    .then(res=>res.json())
    .then(data=>setPartners(data))
  },[partnerApi])

  const handlePartner =(id)=>{
    const confirmMsg = window.confirm("Would you like to delete this partner")
    if(confirmMsg){
        console.log(id)
      axios.delete(`https://iman-xpress-backend-theta.vercel.app/api/partner/deletePartner/${id}`,  {
        headers: {
            "Content-Type": "application/json"
        }
        }).then((res)=> {
            console.log("deletedCount",res.data.deletedCount)
            console.log(res.data)
            const withOutDeletedpartner = partnerApi.filter(partner => partner._id !== id)
            setPartnerApi(withOutDeletedpartner)
            alert("Partner deleted successfully!")

        }).catch((err)=>console.log(err))
    }else{
        alert("Don't wrroy you partner is safe now");
    }
  }
    return (
     <Container>
        <h2 style={{textAlign:'center'}}>Manage Your Partners-{partners.length}</h2>
        <Grid container alignItems='center' justifyContent='center' spacing={4}>
        {
        partners.map(partner=>
          <Grid sx={{boxShadow:10, padding:'10px',margin:'20px'}} item xs={12} md={4} sm={6} lg={4}
          key={partner._id} 
          >
             <div>
            <img  src={partner.image} alt="" width='250px' height='150px' />
             </div>
             <Button 
             variant="contained" 
             onClick={() => handlePartner(partner._id)}
             >
             <i className="fa-solid fa-trash-can-xmark"></i> Delete Partner
             </Button>
          </Grid> )
        }
        
  
         </Grid>
     </Container>
    );
};

export default ManagePartner;