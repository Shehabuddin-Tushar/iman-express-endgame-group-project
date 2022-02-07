import { Box, Button, Container, Grid } from '@mui/material';
import { green, red } from '@mui/material/colors';
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

    return (
        <Container>
            <Box sx={{ my: 2 }}>
                <Button onClick={() => setCatagory("breakfast")} sx={{ bgcolor: red[500], mr: 1 }} variant='contained'>Breakfast</Button>
                <Button onClick={() => setCatagory("lunch")} sx={{ bgcolor: red[500], mr: 1 }} variant='contained'>Lunch</Button>
                <Button onClick={() => setCatagory("dinner")} sx={{ bgcolor: green[500], mr: 1 }} variant='contained'>Dinner</Button>
            </Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
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