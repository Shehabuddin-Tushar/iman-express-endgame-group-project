import {
  Alert,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { pink, red } from "@mui/material/colors";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const states = [
  {
    value: 'bikeRider',
    label: 'Bike Rider'
  },
  {
    value: 'foodDelivery',
    label: 'Food Delivery'
  },
  {
    value: 'medicineDelivery',
    label: 'Medicine Delivery'
  },
  {
    value: 'parcelDelivery',
    label: 'Parcel Delivery'
  },
];


const RiderRegistration = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [values, setValues] = React.useState("foodDelivery");

  const onSubmit = (data) => {
    console.log(data);
    axios.post('https://iman-xpress.herokuapp.com/api/authRider/register', data).then(res => {
        console.log(res)
        if (res.data.authToken) {
          Swal.fire({
            icon: 'success',
            title: 'Rider Registered Successfully',
          });
        }
        }).catch(err=>console.log(err))
  };
  


  // handle rider state
  const handleState = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  return (
    <div className="login">
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          {" "}
          <Typography variant="h4" sx={{ py: 5 }} fontWeight="bold">
            Earn with Your Bike
          </Typography>
          <Grid
            container
            sx={{
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
              <Paper sx={{ p: 5, textAlign: "left" }} elevation={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Typography variant="h5" fontWeight="bold">
                    Register Now
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <TextField
                      label="First Name"
                      required
                      sx={{ mt: 2, width: "100%" }}
                      variant="outlined"
                      {...register("fname")}
                    />
                    <TextField
                      label="Last Name"
                      sx={{ mt: 2, width: "100%" }}
                      variant="outlined"
                      {...register("lname")}
                    />
                    <TextField
                      label="Mobile Number"
                      required
                      type="number"
                      sx={{ mt: 2, width: "100%" }}
                      variant="outlined"
                      {...register("mobile")}
                    />
                    <TextField
                      required
                      label="Address "
                      type="text"
                      sx={{ mt: 2, width: "100%" }}
                      variant="outlined"
                      {...register("address")}
                    />
                     <TextField
                  required
                  label="Email"
                  type="email"
                  sx={{ mt: 2, width: "100%" }}
                  variant="outlined"
                  {...register("email")}
              />
              <TextField
                  required
                  label="Password"
                  type="password"
                  sx={{ my: 2, width: "100%" }}
                  variant="outlined"
                  {...register("password")}
              />
                    <Box sx={{ display:'flex', mt: 2 }}>
                    <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleState}
                              required
                              {...register("riderState")}
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
                    </Box>
                  </Box>{" "}
                  <Box sx={{ mt: 4 }}>
                    <Button variant="outlined" color="warning" type="submit">
                      Register
                    </Button>
                  </Box>
                  
                 
                </form>
                <Box sx={{ mt: 1 }}>
                  <Button variant="outlined" color="warning">
                    <Link to="/login">
                      Login
                    </Link>
                   
                  </Button>
                </Box>
                <Typography color="gray" variant="subtitle">
                  By clicking this button, you are agreeing to{" "}
                  <Link to="/" style={{ color: red[700] }}>
                    IMAN Xpress terms and privacy policy
                  </Link>
                </Typography>
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
              </Paper>
            </Grid>
          </Grid>{" "}
        </Box>
      </Container>
    </div>
  );
};

export default RiderRegistration;
