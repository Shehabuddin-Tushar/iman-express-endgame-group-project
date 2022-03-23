import { Button, Container, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Navbar/Navbar'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { db } from '../../Pages/Login/firebase.init'
import Riderchatmodal from '../../Component/Modal/Riderchatmodal'

import axios from 'axios'
import useAuth from '../../Hooks/useAuth'
function Allusers() {

    const [allusers, setAllusers] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [userinfo, setUserinfo] = useState({});
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const {loginstatus}=useAuth()

    useEffect(() => {

        axios.get("https://iman-xpress.herokuapp.com/api/authgeneral/getallusers").then(res => setAllusers(res.data.allusers)).catch(err => console.log(err))

    
    }, [loginstatus])




    const chatwithuser = (userid) => {
     

        axios.get(`https://iman-xpress.herokuapp.com/api/authgeneral/getuserbyid/${userid}`)
            .then(res => setUserinfo(res.data.userdata)).catch(err => console.log(err))



         handleOpen()
    }
    return (
        <> <title>IMan Xpress || All Riders</title>
            <Navbar />
            <Container style={{ marginTop: "30px", marginBottom: "30px" }}>
                <Grid container spacing={2}>
                    {
                        allusers.map((info) => {
                            return (
                                <Grid item lg={3} md={4} sm={6} xs={12} key={info._id}>
                                    <div className="card-container">
                                        <span className="pro" style={{ backgroundColor: "green" }}>Online</span>
                                        <img className="round" src="https://static.vecteezy.com/system/resources/thumbnails/002/002/332/small/ablack-man-avatar-character-isolated-icon-free-vector.jpg" height="120px" width="120px" alt="user" />
                                        <h3>{info.email}</h3>
                                        

                                        <div className="buttons" >

                                            <Button variant='outlined' onClick={() => chatwithuser(info._id)}>
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
            <Riderchatmodal openModal={openModal} handleClose={handleClose} userallinfo={userinfo} />
        </>
    )
}

export default Allusers