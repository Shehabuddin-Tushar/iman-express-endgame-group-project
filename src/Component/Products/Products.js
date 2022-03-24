import { Box, Button, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';



const Products = ({darkMode}) => {
    const [servics, setServics] = useState([]);
    const [alldata, setAlldata] = useState([]);
    const [category, setCategory] = useState("resturant");
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        axios.get(`https://iman-xpress.herokuapp.com/api/auth/getmerchantuserbycategory/${category}`, {
            headers: {

                "Content-Type": "application/json"
            }
        }).then((res) => setAlldata(res.data)).catch((err) => console.log(err))

    }, [])

    const allresturant = (category) => {
        axios.get(`https://iman-xpress.herokuapp.com/api/auth/getmerchantuserbycategory/${category}`, {
            headers: {

                "Content-Type": "application/json"
            }
        }).then((res) => setAlldata(res.data)).catch((err) => console.log(err))
    }

    const allmedicine = (category) => {
        axios.get(`https://iman-xpress.herokuapp.com/api/auth/getmerchantuserbycategory/${category}`, {
            headers: {

                "Content-Type": "application/json"
            }
        }).then((res) => setAlldata(res.data)).catch((err) => console.log(err))
    }

    const allsupershop = (category) => {
        axios.get(`https://iman-xpress.herokuapp.com/api/auth/getmerchantuserbycategory/${category}`, {
            headers: {

                "Content-Type": "application/json"
            }
        }).then((res) => setAlldata(res.data)).catch((err) => console.log(err))
    }

    return (
        <Container>
            <Box sx={{ my: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', p: 1 }}>
                <Box>
                    <Typography variant='h4' sx={{ fontWeight: 'bold',color: `${darkMode?'white':'#323232'}`, mr: 3 }}>ALL FOR THE CATEGORIES</Typography>
                    <Typography color='text.secondary' sx={{ textAlign: 'left' }}>We are providing shopping in resturant,medicine and shopping </Typography>
                </Box>
                <Button onClick={() => allresturant("resturant")} className={category === 'resturant' ? 'selected' : ''} sx={{ color: 'text.secondary', fontWeight: 'bold', mr: 1 }} variant='text'>Resturants</Button>
                <Button onClick={() => allmedicine("medicine")} sx={{ color: `${darkMode?'white':"gray"} `, fontWeight: 'bold', mr: 1 }} variant='text' className={category === 'medicine' ? 'selected' : ''}>Medicines</Button>
                <Button onClick={() => allsupershop("supershop")} sx={{ color: `${darkMode?'white':"gray"} `, fontWeight: 'bold', mr: 1 }} variant='text' className={category === 'supershop' ? 'selected' : ''}>Super Shops</Button>
            </Box>
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    alldata.map(data => <Product
                        key={alldata._id}
                        service={data}
                        isLoad={isLoad}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default Products;