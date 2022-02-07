import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [servics, setServics] = useState([]);
    const [catagory, setCatagory] = useState("breakfast");
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        const run = async () => {
            setIsLoad(true)
            const res = await fetch('https://still-escarpment-97204.herokuapp.com/foods')
            const data = await res.json()

            const matchData = data.filter(service => service.catagory === catagory)
            setServics(matchData)
            setIsLoad(false)
        }
        run()
    }, [catagory])

    console.log(catagory)
    return (
        <Container>
            <Box sx={{ my: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', borderBottom: '2px solid orangered', p: 1 }}>
                <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#666060', mr: 3 }}>ALL FOR THE CATAGORYS</Typography>
                <Button onClick={() => setCatagory("breakfast")} className={catagory === 'breakfast' ? 'selected' : ''} sx={{ color: 'text.secondary', fontWeight: 'bold', mr: 1 }} variant='text'>Breakfast</Button>
                <Button onClick={() => setCatagory("lunch")} sx={{ color: 'text.secondary', fontWeight: 'bold', mr: 1 }} variant='text' className={catagory === 'lunch' ? 'selected' : ''}>Lunch</Button>
                <Button onClick={() => setCatagory("dinner")} sx={{ color: 'text.secondary', fontWeight: 'bold', mr: 1 }} variant='text' className={catagory === 'dinner' ? 'selected' : ''}>Dinner</Button>
            </Box>
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    servics.map(service => <Service
                        key={service._id}
                        service={service}
                        isLoad={isLoad}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default Services;