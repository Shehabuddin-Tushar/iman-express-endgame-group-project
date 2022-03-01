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

const CreatAccount = ({register}) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
 
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
         
            <Box>
              <TextField
                label="Store Name"
                required
                sx={{ mt: 2, width: "100%" }}
                variant="outlined"
                {...register("storeName")}
              />
              
             
              <TextField
                required
                label="Email Address "
                type="email"
                sx={{ my: 2, width: "100%" }}
                variant="outlined"
                {...register("email ")}
              /><TextField
              label="Password"
              required
              type="password"
              sx={{ mt: 2, width: "100%" }}
              variant="outlined"
              {...register("password")}
            />
            </Box>{" "}
            <Box sx={{ textAlign: "left", my: 3 }}>
              <Button variant="outlined" color="warning" type="submit">
                Create Account
              </Button>
            </Box>
            
         
          {error && (
            <Alert sx={{ my: 2 }} severity="error">
              Password not matched.
            </Alert>
          )}
          {success && (
            <Alert sx={{ my: 2 }} severity="success">
              Account successfully created.
            </Alert>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatAccount;
