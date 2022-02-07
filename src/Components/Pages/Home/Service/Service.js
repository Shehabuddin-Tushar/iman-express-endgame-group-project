import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Skeleton, Typography } from '@mui/material';
import React from 'react';

const Service = ({ service, isLoad }) => {
    const { name, pic, price } = service;
    return (
        <Grid item xs={2} sm={4} md={3}>
            {
                isLoad ? <Box>
                    <Skeleton
                        variant="rectangular" height={150} />
                    <Typography variant="h3"><Skeleton /></Typography>

                </Box> : <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        width='100%'
                        image={pic}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            }
        </Grid>
    );
};

export default Service;