import { Container, Grid } from '@mui/material';
import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='footerContainer'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3} sm={6}>
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
            </Container>
        </footer>
    );
};

export default Footer;