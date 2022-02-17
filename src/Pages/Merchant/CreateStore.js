import {
  Alert,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CreateStore = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Grid
        container
        sx={{
          // height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <TextField
                label="Store Location"
                required
                sx={{ mt: 2, width: "100%" }}
                variant="outlined"
                {...register("storeLocation")}
              />
              <TextField
                label="Owner’s Name"
                required
                type="text"
                sx={{ mt: 2, width: "100%" }}
                variant="outlined"
                {...register("ownersName")}
              />
              <TextField
                required
                label="Store Address"
                type="number"
                sx={{ mt: 2, width: "100%" }}
                variant="outlined"
                {...register("storeAddress")}
              />
              <TextField
                required
                label="Website/Facebook Page "
                type="text"
                sx={{ my: 2, width: "100%" }}
                variant="outlined"
                {...register("link ")}
              />
            </Box>{" "}
            <Box sx={{ textAlign: "left", my: 3 }}>
              <Button variant="outlined" color="warning" type="submit">
                Create Store
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateStore;
