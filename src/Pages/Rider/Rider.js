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

const Rider = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = React.useState("female");

  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:8080/api/authRider/register', data).then(res => {
        console.log(res)
        if (res.data.authToken) {
          Swal.fire({
            icon: 'success',
            title: 'Rider Registered Successfully',
          });
        }
        }).catch(err=>console.log(err))
  };
  //radio field
  
  const handleChange = (event) => {
    setValue(event.target.value);
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
                      label="City "
                      type="text"
                      sx={{ mt: 2, width: "100%" }}
                      variant="outlined"
                      {...register("city")}
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
                    <Box sx={{ textAlign: "left", mt: 2 }}>
                      <FormControl>
                        <FormLabel>Service(s) you want to provide</FormLabel>
                        <RadioGroup
                          name="rider"
                          value={value}
                          onChange={handleChange}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <FormControlLabel
                              value="bikeRider"
                              {...register("bikeRider")}
                              control={
                                <Checkbox
                                  sx={{
                                    "&.Mui-checked": {
                                      color: pink[600],
                                    },
                                  }}
                                />
                              }
                              label="Bike Rider"
                            />
                            <FormControlLabel
                              value="foodDelivery"
                              {...register("foodDelivery")}
                              control={
                                <Checkbox
                                  sx={{
                                    "&.Mui-checked": {
                                      color: pink[600],
                                    },
                                  }}
                                />
                              }
                              label="Food Delivery"
                            />

                            <FormControlLabel
                              value="parcelDelivery"
                              {...register("parcelDelivery")}
                              control={
                                <Checkbox
                                  sx={{
                                    "&.Mui-checked": {
                                      color: pink[600],
                                    },
                                  }}
                                />
                              }
                              label="Parcel Delivery"
                            />
                            <FormControlLabel
                              value="medicineDelivery"
                              {...register("medicineDelivery")}
                              control={
                                <Checkbox
                                  sx={{
                                    "&.Mui-checked": {
                                      color: pink[600],
                                    },
                                  }}
                                />
                              }
                              label="Medicine Delivery"
                            />
                          </Box>
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Box>{" "}
                  <Box sx={{ mt: 4 }}>
                    <Button variant="outlined" color="warning" type="submit">
                      Register
                    </Button>
                  </Box>
                  <Typography color="gray" variant="subtitle">
                    By clicking this button, you are agreeing to{" "}
                    <Link to="/" style={{ color: red[700] }}>
                      IMAN Xpress terms and privacy policy
                    </Link>
                  </Typography>
                </form>
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

export default Rider;
