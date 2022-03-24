import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css";


const Service = ({ service, isLoad }) => {
  const { category, image, name, _id } = service;
  isLoad=false
 
  const navigate = useNavigate();


  const databyid=(id)=> {
    
    navigate(`/merchantproduct/${id}`)
  }

  return (
    <>
      <Grid item xs={12} sm={4} md={3}>
        {isLoad ? (
          <Box>
            <Skeleton variant="rectangular" height={150} />
            <Typography variant="h3">
              <Skeleton />
            </Typography>
          </Box>
        ) : (
          <Card sx={{ p: 2, height: "250px" }} className="card">
            <Box className="img-container">
              <CardMedia
                component="img"
                sx={{ borderRadius: "5px" }}
                height="220px"
                width="100%"
                image={image}
                  alt="Paella dish"
                  
                 
              />
              <Box className="icon-container">
               
                <IconButton aria-label="share" style={{ width: "150px" }} onClick={() => databyid(_id)}>
                    <ShuffleIcon />
                </IconButton>
                
              </Box>
           
            </Box>
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                {name}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Grid>
    </>
  );
};

export default Service;
