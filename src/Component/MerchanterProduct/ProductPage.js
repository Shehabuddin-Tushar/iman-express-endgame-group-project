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
import React, { useState, useEffect } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import ProductModal from "../Modal/Modal";
import MerchantinfoModal from "../Modal/MerchantinfoModal";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./merchantproduct.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Co2Sharp } from "@mui/icons-material";

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
  const navigate = useNavigate();
  const [openinfoModal, setOpeninfoModal] = React.useState(false);
  const handleinfoOpen = () => setOpeninfoModal(true);
  const handleinfoClose = () => setOpeninfoModal(false);
  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
  const myinfo = JSON.parse(localStorage.getItem("merchantInfo"))
  const mytoken = (localStorage.getItem("merchant"))

  const { id } = useParams();
  console.log(id)

  // console.log(mytoken)
  // let location = useLocation();
  // const redirect_url = location.state?.from || "/products";
  // console.log(redirect_url)
  const [allproduct, setAllproduct] = useState([]);
  const [merchantdata, setMerchantdata] = useState({});
  const [Merchantproductdata, setMerchantproductdata] = useState({})

  const [searchproduct, setSearchproduct] = useState([]);
  const [cartproduct, setCartproduct] = useState({});
  const [localproduct, setLocalproduct] = useState(0);
  const [localproductdata, setLocalproductdata] = useState([]);
  const [total, setTotal] = useState(0);
  const [updatelocal, setUpdatelocal] = useState([]);
  const [totalamount, setTotalamount] = useState(0);
  const [totalamountwithtax, setTotalamountwithtax] = useState(0);


  useEffect(() => {

    axios.get(`https://iman-xpress.herokuapp.com/api/auth/getmerchantuser/${id}`, {
      headers: {

        "Content-Type": "application/json"
      }
    }).then((res) => setMerchantdata(res.data)).catch((err) => console.log(err))

    axios.get(`https://iman-xpress.herokuapp.com/api/merchant/fetchallproductsbyid/${id}`, {
      headers: {

        "Content-Type": "application/json"
      }
    }).then((res) => setAllproduct(res.data)).catch((err) => console.log(err))

   

  }, [])

  useEffect(() => {
    let mylocalproduct = JSON.parse(localStorage.getItem(`imanxpresscart-${id}`)) ? JSON.parse(localStorage.getItem(`imanxpresscart-${id}`)).length:0
    setLocalproduct(mylocalproduct)

    let mylocalproductdata = JSON.parse(localStorage.getItem(`imanxpresscart-${id}`)) ? JSON.parse(localStorage.getItem(`imanxpresscart-${id}`)) : []
    setLocalproductdata(mylocalproductdata)
    console.log(mylocalproductdata)

    let amount=0
    for (let pro of mylocalproductdata){
      amount = (amount + pro.productprice * pro.count)
    }
    setTotalamount(amount)
    setTotalamountwithtax(Math.round(amount + amount * 15 / 100))
   
  },[localproduct,updatelocal])

  const viewdata = (id) => {

    axios.get(`https://iman-xpress.herokuapp.com/api/merchant/fetchproductbyid/${id}`)
      .then((res) => setMerchantproductdata(res.data)).catch(err => console.log(err))
    handleOpen()
  }



  const onSubmit = data => {
    alert("You search " + "" + data.searchproduct)

    axios.post(`https://iman-xpress.herokuapp.com/api/merchant/getproductbyname/${id}`, data, {
      headers: {

        "Content-Type": "application/json"
      }
    }).then((res) => {
      setSearchproduct(res.data.products)
      if (res.data.not) {
        Swal.fire({
          icon: 'error',
          title: res.data.not,
        });

      } else {
        setSearchproduct(res.data.products)
      }
    }).catch((err) => console.log(err))
    reset()
  };

  const addtocart = (product, ids) => {
    console.log(ids)
    console.log(product)


    let localdata = localStorage.getItem(`imanxpresscart-${id}`) ?
      JSON.parse(localStorage.getItem(`imanxpresscart-${id}`)) : [];




    const duplicates = localdata.filter(cartitem => cartitem._id === ids)

    if (duplicates.length === 0) {
      const productToadd = {
        ...product,
        count: 1

      }
      localdata.push(productToadd)

      localStorage.setItem(`imanxpresscart-${id}`, JSON.stringify(localdata))

      setLocalproduct(localproduct + 1)

    }



  }
  const sumdata = (productid) => {
   console.log(productid)
    let localdata = localStorage.getItem(`imanxpresscart-${id}`) ?
      JSON.parse(localStorage.getItem(`imanxpresscart-${id}`)) : [];
    const datafind = localdata.filter(cartitem => cartitem._id === productid);

    datafind[0].count += 1;
   
    const countupdate = [...localdata]
    localStorage.setItem(`imanxpresscart-${id}`, JSON.stringify(countupdate))
     localdata = localStorage.getItem(`imanxpresscart-${id}`) ?
      JSON.parse(localStorage.getItem(`imanxpresscart-${id}`)) : [];
    setUpdatelocal(localdata)
  }


  const minusdata = (productid) => {
    console.log(productid)
    let localdata = localStorage.getItem(`imanxpresscart-${id}`) ?
      JSON.parse(localStorage.getItem(`imanxpresscart-${id}`)) : [];
    const datafind = localdata.filter(cartitem => cartitem._id === productid);

    datafind[0].count -= 1;
    if (datafind[0].count<1) {
      datafind[0].count=1
    } else {
      const countupdate = [...localdata]
      localStorage.setItem(`imanxpresscart-${id}`, JSON.stringify(countupdate))
      localdata = localStorage.getItem(`imanxpresscart-${id}`) ?
        JSON.parse(localStorage.getItem(`imanxpresscart-${id}`)) : [];
      setUpdatelocal(localdata)
    }
   
  }

  const productdeletefromlocalstorage = (productid) => {
  
    let confirm = window.confirm("Are you sure you want to remove this product from cart?")
    if (confirm) {
      let localdata = localStorage.getItem(`imanxpresscart-${id}`) ?
        JSON.parse(localStorage.getItem(`imanxpresscart-${id}`)) : [];
      const datafind = localdata.filter(cartitem => cartitem._id !== productid);
      console.log(datafind)
      localStorage.setItem(`imanxpresscart-${id}`, JSON.stringify(datafind))
      let mylocalproductdata = JSON.parse(localStorage.getItem(`imanxpresscart-${id}`)) ? JSON.parse(localStorage.getItem(`imanxpresscart-${id}`)) : []
      setLocalproductdata(mylocalproductdata)
      let amount = 0
      for (let pro of mylocalproductdata) {
        amount = (amount + pro.productprice * pro.count)
      }
      setTotalamount(amount)
      setTotalamountwithtax(Math.round(amount + amount * 15 / 100))
    }
    
  }


 

  return (
    <>
      <title>IMan Xpress || Product</title>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item lg={9} md={9} sm={12} xs={12} className="bannerwithproduct">
          <Box style={{ overflow: "scroll", maxHeight: "100vh" }}>
            <img
              src={merchantdata.image}
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
                <div className="allproductmerchant">
                  <Typography variant="h5" style={{ paddingRight: "15px", marginBottom: "5px" }}>
                    <Button onClick={() => setSearchproduct([])}>{merchantdata.name}</Button>
                  </Typography>
                  <div class="wrap">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div class="search">

                        <input


                          type="text"
                          className="searchTerm"
                          placeholder="What are you looking for?"
                          {...register("searchproduct", { required: true })}
                        />
                        <button type="submit" class="searchButton">

                          <i
                            class="fa fa-search"
                            style={{ color: "#3781CB" }}
                          ></i>
                        </button>

                      </div>
                    </form>
                  </div>
                </div>
                <Button variant="h5" variant="outlined" className="inform" onClick={handleinfoOpen}>
                  Resturent information
                </Button>
                <Button className="inform2" onClick={handleinfoOpen}>
                  <InfoIcon />
                </Button>
              </div>
            </Container>
            <hr style={{ border: "1px solid #E5E7E9" }} />
            <Container>
              <Grid container spacing={2}>
                {searchproduct.length !== 0 ? searchproduct.map((product) => {
                  return (
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                      <div class="product-container">
                        <div class="product" style={{ height: "160px" }}>
                          <div class="product-info" key={product._id}>
                            <h5>{product.productname}</h5>
                            <h2>{product.productprice} tk</h2>
  
                            <ButtonGroup
                              variant="outlined"
                              aria-label="outlined button group"
                            >
                              <Button onClick={() => addtocart(product,product._id)} >
                                <ShoppingCartIcon />
                              </Button>
                              <Button onClick={() => viewdata(product._id)}>
                                <RemoveRedEyeIcon />
                              </Button>
                              <Button >
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
                }) : allproduct.map((product) => {
                 
                  return (
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                      <div class="product-container">
                        <div class="product" style={{ height: "160px" }}>
                          <div class="product-info" key={product._id}>
                            <h5>{product.productname}</h5>
                            <h2>{product.productprice} tk</h2>

                            <ButtonGroup
                              variant="outlined"
                              aria-label="outlined button group"
                            >
                              <Button onClick={() => addtocart(product,product._id)} >
                                <ShoppingCartIcon />
                              </Button>
                              <Button onClick={() => viewdata(product._id)}>
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
              <StyledBadge badgeContent={localproduct} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Typography>
          <Demo>
            <List>
              {
              
                localproductdata?.map((data) => {
                
                  return (
                    <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={()=>productdeletefromlocalstorage(data._id)}>
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <img
                          src={data.productimage}
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
                        <ListItemText>{data.productname}</ListItemText>
                        <ListItemText>{data.productprice + "*" + data.count +"="+ data.productprice * data.count} tk</ListItemText>
                        <ListItemText>
                          <div class="quantity buttons_added">
                            <input type="button" value="-" class="minus" onClick={() => minusdata(data._id)} />
                            <input
                              type="number"
                              step="1"
                              min="1"
                              max=""
                              name="quantity"
                              value={data.count}
                              title="Qty"
                              class="input-text qty text"
                              size="4"
                              pattern=""
                              inputmode=""
                            />
                            <input type="button" value="+" class="plus" onClick={()=>sumdata(data._id)} />
                          </div>
                        </ListItemText>
                      </div>
                    </ListItem>
                  )
                })
              }
              {/* <ListItem
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
                      <form>
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
                      </form>
                    </div>
                  </ListItemText>
                </div>
              </ListItem> */}
              <hr />
              <Typography style={{ marginLeft: "50px" }}>Total price: <span style={{ fontWeight: "bold" }}>{totalamount}</span>tk</Typography>
              <Typography style={{ marginLeft: "50px" }}>Tax:<span style={{ fontWeight: "bold" }}>15%</span></Typography>
              <hr></hr>
              <Typography style={{ marginLeft: "50px" }}>Total price with tax: <span style={{ fontWeight: "bold" }}>{totalamountwithtax}</span>tk</Typography>
              ,
            </List>
          </Demo>
        </Grid>
      </Grid>
      <Footer />
      <ProductModal openModal={openModal} handleClose={handleClose} productinfo={Merchantproductdata} />

      <MerchantinfoModal openModal={openinfoModal} handleClose={handleinfoClose} merchantinfo={merchantdata} />
    </>
  );
}

export default ProductPage;
