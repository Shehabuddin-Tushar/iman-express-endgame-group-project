import { Container, Grid } from '@mui/material';
import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='footerContainer'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} sm={6}>
                        <h1>Platform</h1>
                        <p>Iman Bike</p>
                        <p>Iman Food</p>
                        <p>Iman Car</p>
                        <p>Iman Health</p>
                        <p>Iman Shop</p>
                        <p>Iman Parchel</p>
                        <p>Iman Courier</p>
                    </Grid>
                    <Grid item xs={6} md={3} sm={6}>
                        <h1>Earn</h1>
                        <p>Earn With Bike</p>
                        <p>Earn With Care</p>
                        <p>Earn With Cycle</p>
                    </Grid>
                    <Grid item xs={6} md={3} sm={6}>
                        <h1>Merchant</h1>
                        <p>Courier Merchant SignUp</p>
                        <p>Courier Merchant LogIn</p>
                        <p>Care Admiral </p>
                        <p>Resto Merchant SignUp</p>
                        <p>Resto Merchant LogIn</p>
                    </Grid>
                    <Grid item xs={6} md={3} sm={6}>
                        <h1>Help</h1>
                        <p>Walk in Support Centers</p>
                        <p>User Help Centers</p>
                        <p>Rider Help Center</p>
                        <p>Merchant Help Center</p>
                        <p>Helpline 09678100800</p>
                    </Grid>
                </Grid>
                <div className='footerPartTwo'>
                    <hr/>
                    <Grid container spacing={2} className='footerPartTwo-Content'>
                        <Grid item xs={12} md={6} sm={6}>
                            
                            <img src="https://i.ibb.co/jz5WkPr/logo.png" alt="iman-xpress" />
                            
                        </Grid>
                        <Grid item xs={12} md={6} sm={6}>
                            <div className='partTwo-Two'>
                                <p>About Us</p>
                                <p>Blogs</p>
                                <p>Contact</p>
                                <p>Bussiness</p>
                            </div>
                        </Grid>
                    </Grid>
                    <hr/>
                </div>
                <div className='footerPartThree'>
                    <Grid container spacing={2} className='footerPartThree-Content'>
                        <Grid item xs={12} md={6} sm={6}>
                            <div>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={4} sm={12}>
                                        <div>
                                            <p>User App</p>
                                            <button className='googlePlayBtn'>
                                            <i className="fab fa-google-play"></i>
                                            <div>
                                                <p>GETITON</p>
                                                <p>Google Play</p>
                                            </div>
                                        </button>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={4} sm={12}>
                                        <button className='googlePlayBtn'>
                                            <i className="fab fa-apple"></i>
                                            <div>
                                                <p>Download</p>
                                                <p>App Store</p>
                                            </div>
                                        </button>
                                    </Grid>
                                    <Grid item xs={12} md={4} sm={12}>
                                        <p>Drive App</p>
                                        <button className='googlePlayBtn'>
                                            <i className="fab fa-google-play"></i>
                                            <div>
                                                <p>GETITON</p>
                                                <p>Google Play</p>
                                            </div>
                                        </button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} sm={6}>
                            <div>
                            <Grid container spacing={2}>
                                    <Grid item xs={12} md={6} sm={6}>
                                        <div className="footerIcons">
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-instagram"></i>
                                        <i className="fab fa-chrome"></i>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={6} sm={6}>
                                        <div className="footerIcons-Two">
                                            <p>Region</p>
                                            <i class="fas fa-basketball-ball"></i>EN(BD)
                                        </div>
                                    </Grid>
                                </Grid>     
                            </div>
                        </Grid>
                    </Grid>
                    <div className='footerPartFour'>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={6} sm={6}>
                                <p>ImanExpress &copy; 2021 copy right reserved</p>
                            </Grid>
                            <Grid item xs={6} md={3} sm={6}>
                                <p>Team & conditions</p>
                            </Grid>
                            <Grid item xs={6} md={3} sm={6}>
                                <p style={{textAlign: "right"}}>Privacy Policy</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;