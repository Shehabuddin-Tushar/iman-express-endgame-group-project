import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Navbar/Navbar'
import './Allriders.css'

function Allriders() {
  return (
      <> <title>IMan Xpress || All Riders</title>
          <Navbar />
          <Container style={{marginTop:"30px",marginBottom:"30px"}}>
              <Grid container spacing={2}>
                  {
                      [...Array(7).keys()].map(() => {
                          return (
                              <Grid item lg={3}md={4}sm={6}xs={12}>
                                  <div className="card-container">
                                      <span className="pro" style={{backgroundColor:"green"}}>Online</span>
                                      <img className="round" src="https://i.postimg.cc/Wz3xxggH/tushar.jpg" height="120px" width="120px" alt="user" />
                                      <h3>Tushar</h3>
                                      <h6>Dhaka-Dhanmondi</h6>
                                     
                                      <div className="buttons" >
                                         
                                          <Button variant='outlined'>
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
      </>
  )
}

export default Allriders