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

// category: "resturant"
// date: "2022-03-03T16:11:36.810Z"
// email: "tanjim@gmail.com"
// faceBookLink: "tanjim page"
// image: "https://i.ibb.co/XZmM4RR/tanjimhouse.jpg"
// mobileNumber: 1409130405
// name: "tanjim house"
// storeAddress: "Dhanmondi"
// __v: 0
// _id: "6220e8b81a9fd042dc67a005"

const Service = ({ service, isLoad }) => {
  const { category, image, name, _id } = service;
  isLoad=false
  console.log(service)
  const navigate = useNavigate();

  // const handleDetail = (id) => {
  //   navigate(`/product/${id}`);
  // };

  const databyid=(id)=> {
    console.log(id)
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
                {/* <IconButton
                  onClick={() => handleDetail(name)}
                  aria-label="share"
                >
                  <ShoppingCartIcon />
                </IconButton> */}
                {/* <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton> */}
                <IconButton aria-label="share" style={{ width: "150px" }} onClick={() => databyid(_id)}>
                    <ShuffleIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton> */}
              </Box>
              {/* <Box className='price'>
                            <Typography sx={{ color: '#fff' }}>
                                <BookmarkIcon />
                            </Typography>
                        </Box> */}
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
