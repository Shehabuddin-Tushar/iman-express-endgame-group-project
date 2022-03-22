import { Button, Container, Grid } from '@mui/material'
import React, { useState,useEffect} from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Navbar/Navbar'
import './Allriders.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { db } from '../../Pages/Login/firebase.init'
import Userchatmodal from '../../Component/Modal/Userchatmodal'

import axios from 'axios'
import useAuth from '../../Hooks/useAuth'
function Allriders() {

    const [allriders, setAllriders] = useState([])
    const [openModal, setOpenModal] =useState(false);
    const [riderinfo, setRiderinfo] =useState({});
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const [status, setStatus] = useState();
    const { loginstatus } = useAuth();
    console.log(loginstatus)
   
    
    useEffect(() => {
        const d = new Date();
        let time = d.getTime();
        console.log(time)
        axios.get("https://iman-xpress.herokuapp.com/api/riderProfile/getallriders").then(res=>setAllriders(res.data.riders)).catch(err=>console.log(err))

        // db.collection("messages").add({
        //     message:"my name is tushar",
        //     timestamp:firebase.firestore.FieldValue.serverTimestamp()
        // })


        // db.collection('messages')
        // .orderBy('timestamp','asc')
        // .onSnapshot(snapshot=>(
        //     setMessage(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
        // ))
    },[])
 

console.log(loginstatus)

    const chatwithrider = (riderid) => {
        // https://iman-xpress.herokuapp.com/
        axios.get(`https://iman-xpress.herokuapp.com/api/riderProfile/getriderbyid/${riderid}`)
            .then(res => setRiderinfo(res.data.rider)).catch(err => console.log(err))
        
        
       
        handleOpen()
    }
  return (
      <> <title>IMan Xpress || All Riders</title>
          <Navbar />
          <Container style={{marginTop:"30px",marginBottom:"30px"}}>
              <Grid container spacing={2}>
                  {
                      allriders.map((info) => {
                          return (
                              <Grid item lg={3}md={4}sm={6}xs={12} key={info._id}>
                                  <div className="card-container">
                                      <span className={`${info.login_status == 0 ? "pro" : "pro-online"}`}>{info.login_status==0?"offline":"online"}</span>
                                      <img className="round" src="https://i.postimg.cc/Wz3xxggH/tushar.jpg" height="120px" width="120px" alt="user" />
                                      <h3>{ info.fname}</h3>
                                      <h6>{ info.address}</h6>
                                     
                                      <div className="buttons" >
                                         
                                          <Button variant='outlined' onClick={()=>chatwithrider(info._id)}>
                                              Chat with rider
                                          </Button>
                                      </div>
                                      </div>
                              </Grid> 
                             
                          )
                      })
                  }
                 
                  
              </Grid>
          </Container>
          <Footer />
          <Userchatmodal openModal={openModal} handleClose={handleClose} riderallinfo={riderinfo}/>
      </>
  )
}

export default Allriders