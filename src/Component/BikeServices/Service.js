import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import style from "./service.module.css";
const Service = ({ serviceData }) => {
  return (
    <Grid item xs={12}>
      <Grid item container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid
          xs={6}
          sx={{ textAlign: "left" }}
          className={style.description_with_heading}
        >
          <Typography variant="h4">{serviceData.firstTitle}</Typography>
          <Typography variant="body1">
            {serviceData.firstDescription}
          </Typography>
          <Typography variant="h4" sx={{ mt: "50px" }}>
            {serviceData.secondTitle}
          </Typography>
          <Typography variant="body1">
            {serviceData.secondDescription}
          </Typography>
          <Typography variant="h4" sx={{ mt: "50px" }}>
            {serviceData.thirdTitle}
          </Typography>
          <Typography variant="body1">
            {serviceData.thirdDescription}
          </Typography>
          <Box className={style.learn_more_btn}>
            <button>
              আরো জানুন{" "}
              <img src="https://i.ibb.co/rc5QXgn/arrow-right.png" alt="" />
            </button>
          </Box>
        </Grid>
        <Grid className={style.service_img} item xs={6}>
          <Box
            className={style.service_img_background}
            sx={{
              backgroundImage:
                "url(https://pathao.com/bn/wp-content/themes/webpathao/assets/images/mobile-screen-2.png)",
            }}
          >
            <img
              className={style.img}
              src={serviceData.img}
              alt="service img"
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Service;
