import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";
import merchant from "../images/merchant.webp";
import style from "./MarchantProducts.module.css";

const MarchantProducts = () => {
  return (
    <Box className={style.mainBox}>
      <Grid className={style.merchantText} container spacing={2}>
        <Grid xs={8}>
          <Box>
            <Typography variant="h4" sx={{ textAlign: "left" }}>
              You are welcome to <span>merchant product add page</span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box className={style.marchant_products_box}>
        <Grid container>
          <Grid xs={4} className={style.product_img}>
            <img src={merchant} alt="product-img" />

            <Box className={style.product_img_upload}></Box>
            <Box className={style.product_img_upload_button}>
              <input
                type="file"
                id="selectedFile"
                style={{ display: "none" }}
              />
              <IconButton
                sx={{ color: "#fff" }}
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
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
              <Grid xs={6}>
                <TextField
                  sx={{ width: "90%" }}
                  id="outlined-text-input"
                  label="Product Name"
                  type="text"
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  sx={{ width: "90%" }}
                  id="outlined-text-input"
                  label="Product Title"
                  type="text"
                />
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
            />
          </Grid>
          <Grid xs={4}>
            <TextField
              sx={{ width: "90%" }}
              id="outlined-text-input"
              label="Product Warranty"
              type="text"
            />
          </Grid>
          <Grid xs={4}>
            <TextField
              sx={{ width: "90%" }}
              id="outlined-text-input"
              label="Product Brand"
              type="text"
            />
          </Grid>
          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField
              sx={{ width: "97%" }}
              id="outlined-multiline-static"
              label="Product Description"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Button
          className={style.post_button}
          sx={{ mt: 3 }}
          variant="contained"
        >
          Post Product
        </Button>
      </Box>
    </Box>
  );
};

export default MarchantProducts;
