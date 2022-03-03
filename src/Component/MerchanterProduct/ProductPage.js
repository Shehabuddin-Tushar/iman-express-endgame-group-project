import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import React,{useState,useEffect} from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import ProductModal from "../Modal/Modal";
import MerchantinfoModal from "../Modal/MerchantinfoModal";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./merchantproduct.css";
import axios from "axios";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


function ProductPage() {
   
  
  const theme = useTheme();
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const [openinfoModal, setOpeninfoModal] = React.useState(false);
  const handleinfoOpen = () => setOpeninfoModal(true);
  const handleinfoClose = () => setOpeninfoModal(false);
  
  const myinfo = JSON.parse(localStorage.getItem("merchantInfo"))
  const mytoken = (localStorage.getItem("merchant"))
  const [allproduct, setAllproduct] = useState([]);
  console.log(mytoken)
  useEffect(() => {
    axios.get("http://localhost:8080/api/merchant/fetchallproducts",  {
      headers: {
        "auth-token": mytoken,
        "Content-Type": "application/json"
      }
    }).then((res)=>setAllproduct(res.data)).catch((err)=>console.log(err))
    


  },[])
  
 
  return (
    <>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item lg={9} md={9} sm={12} xs={12} className="bannerwithproduct">
          <Box style={{ overflow: "scroll", maxHeight: "100vh" }}>
            <img
              src={myinfo.image}
              width="100%"
              height="300px"
            />
            <Container>
              <div
                className="nameandinfo"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <Typography variant="h5" style={{ paddingRight: "15px" }}>
                    {myinfo.name}
                  </Typography>
                  <div class="wrap">
                    <div class="search">
                      <input
                        type="text"
                        class="searchTerm"
                        placeholder="What are you looking for?"
                      />
                      <button type="submit" class="searchButton">
                        <i
                          class="fa fa-search"
                          style={{ color: "#3781CB" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
                <Button variant="h5" variant="outlined" className="inform" onClick={handleinfoOpen}>
                  Resturent information
                </Button>
                <Button className="inform2">
                  <InfoIcon />
                </Button>
              </div>
            </Container>
            <hr style={{ border: "1px solid #E5E7E9" }} />
            <Container>
              <Grid container spacing={2}>
                {allproduct.map((product) => {
                  return (
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                      <div class="product-container">
                        <div class="product" style={{height:"160px"}}>
                          <div class="product-info">
                            <h5>{ product.productname}</h5>
                            <h2>{product.productprice} tk</h2>

                            <ButtonGroup
                              variant="outlined"
                              aria-label="outlined button group"
                            >
                              <Button >
                                <ShoppingCartIcon />
                              </Button>
                              <Button onClick={handleOpen}>
                                <RemoveRedEyeIcon />
                              </Button>
                              <Button>
                                <FavoriteIcon />
                              </Button>
                            </ButtonGroup>
                          </div>
                          <div class="product-preview">
                            <img
                              src={product.productimage}
                              width="200px"
                              style={{
                                borderRadius: "5px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </Box>
        </Grid>
        <Grid
          item
          lg={3}
          md={3}
          sm={12}
          xs={12}
          style={{ paddingLeft: "0px" }}
          className="merchantcart"
        >
          <Typography
            sx={{
              mb: 2,
              textAlign: "center",
              backgroundColor: "#1f97e7",
              padding: "5px",
              color: "#fff",
            }}
            variant="h5"
          >
            cart <IconButton aria-label="cart">
              <StyledBadge badgeContent={3} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Typography>
          <Demo>
            <List>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <img
                    src="https://images.food52.com/McqpjxUiMekhfX6Rsq7wuuSoz0g=/2016x1344/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg"
                    width="100px"
                    height="80px"
                    style={{
                      borderRadius: "5px",
                      border: "2px solid #1f97e7",
                      marginRight: "5px",
                    }}
                  />
                </ListItemAvatar>
                <div style={{ marginTop: "-5px" }}>
                  <ListItemText>product name</ListItemText>
                  <ListItemText>1000 tk</ListItemText>
                  <ListItemText>
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus" />
                      <input
                        type="number"
                        step="1"
                        min="1"
                        max=""
                        name="quantity"
                        value="1"
                        title="Qty"
                        class="input-text qty text"
                        size="4"
                        pattern=""
                        inputmode=""
                      />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </ListItemText>
                </div>
              </ListItem>
              ,
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <img
                    src="https://images.food52.com/McqpjxUiMekhfX6Rsq7wuuSoz0g=/2016x1344/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg"
                    width="100px"
                    height="80px"
                    style={{
                      borderRadius: "5px",
                      border: "2px solid #1f97e7",
                      marginRight: "5px",
                    }}
                  />
                </ListItemAvatar>
                <div style={{ marginTop: "-5px" }}>
                  <ListItemText>product name</ListItemText>
                  <ListItemText>1000 tk</ListItemText>
                  <ListItemText>
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus" />
                      <input
                        type="number"
                        step="1"
                        min="1"
                        max=""
                        name="quantity"
                        value="1"
                        title="Qty"
                        class="input-text qty text"
                        size="4"
                        pattern=""
                        inputmode=""
                      />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </ListItemText>
                </div>
              </ListItem>
              ,
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <img
                    src="https://images.food52.com/McqpjxUiMekhfX6Rsq7wuuSoz0g=/2016x1344/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg"
                    width="100px"
                    height="80px"
                    style={{
                      borderRadius: "5px",
                      border: "2px solid #1f97e7",
                      marginRight: "5px",
                    }}
                  />
                </ListItemAvatar>
                <div style={{ marginTop: "-5px" }}>
                  <ListItemText>product name</ListItemText>
                  <ListItemText>1000 tk</ListItemText>
                  <ListItemText>
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus" />
                      <input
                        type="number"
                        step="1"
                        min="1"
                        max=""
                        name="quantity"
                        value="1"
                        title="Qty"
                        class="input-text qty text"
                        size="4"
                        pattern=""
                        inputmode=""
                      />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </ListItemText>
                </div>
              </ListItem>
              <hr />
              <Typography style={{ marginLeft: "50px" }}>Total price: <span style={{fontWeight:"bold"}}>3000</span>tk</Typography>
              
              ,
            </List>
          </Demo>
        </Grid>
      </Grid>
      <Footer />
      <ProductModal openModal={openModal} handleClose={handleClose} />

      <MerchantinfoModal openModal={openinfoModal} handleClose={handleinfoClose} />
    </>
  );
}

export default ProductPage;
