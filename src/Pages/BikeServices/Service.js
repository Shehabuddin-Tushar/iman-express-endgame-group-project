import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import style from "./service.module.css";
const Service = ({ serviceData }) => {
  return (
    <Grid item xs={12}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
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
        </Grid>
        <Grid item xs={6}>
          <Box className={style.service_img_background}>
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
