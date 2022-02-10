import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Products = () => {
    const [servics, setServics] = useState([]);
    const [category, setCategory] = useState("restauant");
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        const run = async () => {
            setIsLoad(true)
            const res = await fetch('./productDb.json')
            const data = await res.json()

            console.log(data)
            const matchData = data.filter(service => service.category === category)
            setServics(matchData)
            setIsLoad(false)
        }
        run()
    }, [category])

    return (
        <Container>
            <Box sx={{ my: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', p: 1 }}>
                <Box>
                    <Typography variant='h3' sx={{ fontWeight: 'bold', color: '#323232', mr: 3 }}>ALL FOR THE CATAGORYS</Typography>
                    <Typography color='text.secondary' sx={{ textAlign: 'left' }}>We are providing Restauants booking, Medicines, Foods. </Typography>
                </Box>
                <Button onClick={() => setCategory("restauant")} className={category === 'restauant' ? 'selected' : ''} sx={{ color: 'text.secondary', fontWeight: 'bold', mr: 1 }} variant='text'>Restauants</Button>
                <Button onClick={() => setCategory("madicine")} sx={{ color: 'text.secondary', fontWeight: 'bold', mr: 1 }} variant='text' className={category === 'madicine' ? 'selected' : ''}>Madicines</Button>
                <Button onClick={() => setCategory("food")} sx={{ color: 'text.secondary', fontWeight: 'bold', mr: 1 }} variant='text' className={category === 'food' ? 'selected' : ''}>Foods</Button>
            </Box>
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    servics.map(service => <Product
                        key={service._id}
                        service={service}
                        isLoad={isLoad}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default Products;