import { Button, Card, CardMedia, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
// import { FaInstagramSquare} from 'react-icons/fa';
import { BsLinkedin } from "react-icons/bs";
// import {FaRegFilePowerpoint} from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { SiFacebook } from "react-icons/si";
import pic1 from "../../img/about-us-delivery.jpg";
import anik from "../../img/anik.jpg";
import imtiaz from "../../img/imtiaz.jpg";
import pic2 from "../../img/our-mission.jpg";
import proloy from "../../img/proloy.png";
import saiful from "../../img/saiful.jpg";
import tanvir from "../../img/tanvir.jpg";
import tushar from "../../img/tushar.jpg";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import "./AboutUs.css";

const AboutUs = () => {
  return (
      <>
          <title>IMan Xpress || About us</title> 
      <Navbar />
      <Container className="font">
        <Grid sx={{ mt: 2 }} container spacing={2}>
          <Grid item xs={12} lg={6} md={6}>
            <Card sx={{ boxShadow: 5 }}>
              <CardMedia
                component="img"
                height="420"
                image={pic1}
                alt="about-us-delivery"
                />
                </Card>
                </Grid>
            
                <Grid sx={{my:5}}  item xs={12}  lg={6} md={6}>
               
                <Typography sx={{mt:5,fontWeight:'bold'}} variant='h4'>
                    About us
                </Typography>
                <Typography  variant='p'>
                    Iman Xpress is a Delivery system website. We care about our customers. Customers satisfaction is our best target. We will also work to save cusmores money,so we have some planes to keep many kind of discount offers in our system.
                </Typography>
                
                </Grid>
            </Grid>
                

            
           
            <Grid sx={{mt:2}} container spacing={2}>
            <Grid sx={{my:5}}  item xs={12}  lg={6} md={6}>
               
               <Typography sx={{mt:5,fontWeight:'bold',textAlign: 'center'}} variant='h4'>
                   Our Mission
               </Typography>
               <Typography  variant='p'>
               We want to provide the best service and we will make our service more user friendly. Also we will work to save everyone’s time, because time is very valuable for everyone and we will work hardly to elemenate the unemployment from our country.
               </Typography>
               
               </Grid>
                <Grid  item xs={12}  lg={6} md={6}>
                <Card sx={{boxShadow:5 }}>
                <CardMedia
                component="img"
                height="420"
                image={pic2}
                alt="about-us-delivery"
                />
                </Card>
                </Grid>
            </Grid>
         


                <Typography sx={{ textAlign: 'center',m:2,mt:3,fontWeight:'bold',borderBottom:'2px solid black'}} variant='h5'>
                Iman_Xpress Developers
                </Typography>
              

                 {/* Developers  */}
            <Grid sx={{mt:2,mb:3,m:3}} container spacing={2}>
                <Grid  item xs={12}  lg={4} md={4}>
                {/* Anik  */}
                <Card sx={{boxShadow:5,textAlign: 'center' }}>
                <CardMedia
                component="img"
                height="340"
                image={anik}
                alt="about-us-delivery"
                />
                <Typography sx={{fontWeight:'bold'}} variant='h6'>
                    Anik Barua Turjoy
                </Typography>
                <Typography variant='p'>
                    Web Developer
                </Typography>
                  {/* SOcial Links  */}
                  <Box sx={{textAlign:'center'}}>
                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
                                        <SiFacebook />
                                    </a>
                                </Button>
                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
                                        <ImTwitter />
                                    </a>
                                </Button>

                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.instragram.com" rel="noreferrer">
                                        <BsLinkedin />
                                    </a>
                                </Button>

                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.instragram.com" rel="noreferrer">
                                        <FaGithub />
                                    </a>
                                </Button>
              
                </Box>
                </Card>
                </Grid>
                <Grid  item xs={12}  lg={4} md={4}>
                {/* Tushar  */}
                <Card sx={{boxShadow:5,textAlign: 'center' }}>
                <CardMedia
                component="img"
                height="340"
                image={tushar}
                alt="about-us-delivery"
                />
                <Typography sx={{fontWeight:'bold'}} variant='h6'>
                Shehabuddin Tushar
                </Typography>
                <Typography variant='p'>
                    Web Developer
                </Typography>
                  {/* SOcial Links  */}
                  <Box sx={{textAlign:'center'}}>
                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
                                        <SiFacebook />
                                    </a>
                                </Button>
                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
                                        <ImTwitter />
                                    </a>
                                </Button>

                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.instragram.com" rel="noreferrer">
                                        <BsLinkedin />
                                    </a>
                                </Button>

                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.instragram.com" rel="noreferrer">
                                        <FaGithub />
                                    </a>
                                </Button>
              
                </Box>
                </Card>
                </Grid>
                <Grid  item xs={12}  lg={4} md={4}>
                {/* imtiaz  */}
                <Card sx={{boxShadow:5,textAlign: 'center' }}>
                <CardMedia
                component="img"
                height="340"
                image={imtiaz}
                alt="about-us-delivery"
                />
                <Typography sx={{fontWeight:'bold'}} variant='h6'>
                ইমতিয়াজ মাহমুদ
                </Typography>
                <Typography variant='p'>
                    Web Developer
                </Typography>
                  {/* SOcial Links  */}
                  <Box sx={{textAlign:'center'}}>
                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
                                        <SiFacebook />
                                    </a>
                                </Button>
                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
                                        <ImTwitter />
                                    </a>
                                </Button>

                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.instragram.com" rel="noreferrer">
                                        <BsLinkedin />
                                    </a>
                                </Button>

                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.instragram.com" rel="noreferrer">
                                        <FaGithub />
                                    </a>
                                </Button>
              
                </Box>
                </Card>
                </Grid>
            </Grid>
            {/* 2nd container  */}
            <Grid sx={{mt:2,mb:3,m:3}} container spacing={2}>
                <Grid  item xs={12}  lg={4} md={4}>
                {/*saiful  */}
                <Card sx={{boxShadow:5,textAlign: 'center' }}>
                <CardMedia
                component="img"
                height="340"
                image={saiful}
                alt="about-us-delivery"
                />
                <Typography sx={{fontWeight:'bold'}} variant='h6'>
                Sif Fahim
                </Typography>
                <Typography variant='p'>
                    Web Developer
                </Typography>
                  {/* SOcial Links  */}
                  <Box sx={{textAlign:'center'}}>
                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
                                        <SiFacebook />
                                    </a>
                                </Button>
                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
                                        <ImTwitter />
                                    </a>
                                </Button>

                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.instragram.com" rel="noreferrer">
                                        <BsLinkedin />
                                    </a>
                                </Button>

                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.instragram.com" rel="noreferrer">
                                        <FaGithub />
                                    </a>
                                </Button>
              
                </Box>
                </Card>
                </Grid>
                <Grid  item xs={12}  lg={4} md={4}>
                {/* Tanvir  */}
                <Card sx={{boxShadow:5,textAlign: 'center' }}>
                <CardMedia
                component="img"
                height="340"
                image={tanvir}
                alt="about-us-delivery"
                />
                <Typography sx={{fontWeight:'bold'}} variant='h6'>
                Tanvir Hossain
                </Typography>
                <Typography variant='p'>
                    Web Developer
                </Typography>
                  {/* SOcial Links  */}
                  <Box sx={{textAlign:'center'}}>
                
                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
                                        <SiFacebook />
                                    </a>
                                </Button>
                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
                                        <ImTwitter />
                                    </a>
                                </Button>

                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.instragram.com" rel="noreferrer">
                                        <BsLinkedin />
                                    </a>
                                </Button>

                                <Button sx={{ fontSize: 'h6.fontSize' }}  >
                                    <a target="_blank" href="https://www.instragram.com" rel="noreferrer">
                                        <FaGithub />
                                    </a>
                                </Button>
              
              
                </Box>
                </Card>
                </Grid>
                <Grid  item xs={12}  lg={4} md={4}>
                {/* U K P Proloy  */}
                <Card sx={{boxShadow:5,textAlign: 'center' }}>
                <CardMedia
                component="img"
                height="340"
                image={proloy}
                alt="about-us-delivery"
                />
                <Typography sx={{fontWeight:'bold'}} variant='h6'>
                U K P Proloy
                </Typography>
                <Typography variant='p'>
                    Web Developer
                </Typography>
                  {/* SOcial Links  */}
                  <Box sx={{textAlign:'center'}}>
                <Button sx={{fontSize: 'h6.fontSize'}}  >
                  <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
                      <SiFacebook/>
                  </a>
              </Button>
              <Button sx={{fontSize: 'h6.fontSize'}}  >
                  <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
                      <ImTwitter/>
                  </a>
              </Button>
             
              <Button sx={{fontSize: 'h6.fontSize'}}  >
                  <a target="_blank" href="https://www.instragram.com" rel="noreferrer">
                      <BsLinkedin/>
                  </a>
              </Button>
              
              <Button sx={{fontSize: 'h6.fontSize'}}  >
                  <a target="_blank" href="https://www.instragram.com" rel="noreferrer">
                      <FaGithub/>
                  </a>
              </Button>
              
                </Box>
                </Card>
                </Grid>
            </Grid>

            
            </Container> 
            <Footer/>
        </>
    );
};

export default AboutUs;
