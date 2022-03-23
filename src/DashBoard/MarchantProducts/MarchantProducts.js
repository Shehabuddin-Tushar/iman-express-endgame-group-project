import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";
import merchant from "../images/merchant.webp";
import { useForm } from "react-hook-form";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import style from "./MarchantProducts.module.css";
import Swal from "sweetalert2";

const MarchantProducts = () => {

  const { register, handleSubmit, watch, formState: { errors } ,reset} = useForm();
  ///////////////////////////////
  const onSubmit = async (data) => {
    console.log(data)
    let imageURL
    const imageData = new FormData();
    imageData.set("key", "06a916692ea087d185221539196ef3a5");
    imageData.append("image", data.productimage[0]);
    try {
      const res = await axios.post(
        "https://api.imgbb.com/1/upload",
        imageData
      );
      imageURL = res.data.data.display_url;
    } catch (error) {

      return alert("Failed to upload the image!");
    }


    const productData = {
      productname: data.productname.toLowerCase(),
      productdescription: data.productdescription,
      productprice: data.productprice,
      productimage: imageURL,
    };
    const mytoken = localStorage.getItem("merchant")
    
    axios.post(`https://iman-xpress.herokuapp.com/api/merchant/addproduct`, productData,
      {
        headers: {
          "auth-token": mytoken,
          "Content-Type": "application/json"
        }
      }).then(res => {
        console.log(res)
        if (res.status==200) {
          // toast.success("product inserted successfully");
          Swal.fire({
            icon: 'success',
            title: "Product inserted successfully",
          });
          return
        }

      })
      .catch(err => console.log(err))
    reset();
  }
 /////////////////////
  return (
    <Box className={style.mainBox}>
      <Grid className={style.merchantText} container spacing={2}>
        <Grid xs={8}>
          <Box>
            <Typography variant="h5" sx={{ textAlign: "left",marginLeft:"30%" }}>
              You are welcome to <span>merchant product add page</span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer />
      <Box className={style.marchant_products_box}>
        <Grid container>
          <Grid xs={4} className={style.product_img}>
            <img src={merchant} alt="product-img" />

            <Box className={style.product_img_upload}></Box>
            
            <Box className={style.product_img_upload_button}>
              <input
                type="file"
                id="selectedFile"
                {...register("productimage", { required: true })}
              />
              <IconButton
                sx={{ color: "#fff" }}
                aria-label="upload picture"
                component="span"
                
              >
                <PhotoCamera />
                </IconButton>
                <Typography> {errors.productimage && <span style={{ color: "red" }}>This field is required</span>}</Typography>
            </Box>
          </Grid>
          <Grid
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container spacing={2} className={style.product_input}>
              <Grid xs={12}>
                <TextField
                  sx={{ width: "90%" }}
                  id="outlined-text-input"
                  label="Product Name"
                  type="text"
                  {...register("productname", { required: true })}
                 
                  />
                  <Typography> {errors.productname && <span style={{ color: "red" }}>This field is required</span>}</Typography>
              </Grid>
                
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 3 }}>
          <Grid xs={4}>
            <TextField
              sx={{ width: "90%" }}
              id="outlined-text-input"
              label="Product Price"
              type="text"
              {...register("productprice", { required: true })}
              />
              <Typography> {errors.productprice && <span style={{ color: "red" }}>This field is required</span>}</Typography>
          </Grid>
          <Grid xs={4}>
            <TextField
              sx={{ width: "90%" }}
              id="outlined-text-input"
              label="Product Warranty"
              type="text"
              disabled
              />
              
          </Grid>
          <Grid xs={4}>
            <TextField
              sx={{ width: "90%" }}
              id="outlined-text-input"
              label="Product Brand"
              type="text"
              disabled
            />
          </Grid>
          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField
              sx={{ width: "97%" }}
              id="outlined-multiline-static"
              label="Product Description"
              multiline
              rows={4}
              {...register("productdescription", { required: true })}
              />
              <Typography> {errors.productdescription && <span style={{color:"red"}}>This field is required</span>}</Typography>
          </Grid>
        </Grid>
        <Button
          className={style.post_button}
          sx={{ mt: 3 }}
            variant="contained"
           type="submit"
        >
          Post Product
        </Button>
      </Box>
      </form>
    </Box>
  
  );
};

export default MarchantProducts;
