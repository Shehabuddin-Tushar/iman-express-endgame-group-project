import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Service from "./Service";
import style from "./service.module.css";

const Services = () => {
  const [data, setData] = useState([]);
  const [tribe, setTribe] = useState("H");
  useEffect(() => {
    fetch("./Fakedata.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const remaining = data.filter((sort) => sort.category === tribe);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        className={style.filter_icon_wrapper}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Box onClick={() => setTribe("H")} className={style.bike_box}>
          <img
            src=" https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/rides.png?v=26.4.20"
            alt=""
          />
          <Typography variant="h6">বাইক</Typography>
        </Box>
        <Box onClick={() => setTribe("C")} className={style.car_box}>
          <img
            src="https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/cars.png?v=26.4.20"
            alt=""
          />
          <Typography variant="h6">কার</Typography>
        </Box>
        <Box onClick={() => setTribe("F")} className={style.food_box}>
          <img
            src="https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/food.png?v=26.4.20"
            alt=""
          />
          <Typography variant="h6">ফুড</Typography>
        </Box>
        <Box onClick={() => setTribe("D")} className={style.delivery_box}>
          <img
            src="https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/parcel.png?v=26.4.20"
            alt=""
          />
          <Typography variant="h6">ডেলিভারি</Typography>
        </Box>
      </Box>
      <Container fixed>
        <Grid spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {remaining.map((serviceData) => (
            <Service
              serviceData={serviceData}
              key={serviceData.category}
            ></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
