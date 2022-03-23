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
import { grey, pink, red } from "@mui/material/colors";
import { Box, color } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";



const Login = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { googleLogin, userLogin,user } = useFirebase();
  const { register, handleSubmit, reset } = useForm();
  const {setLoginstatus} = useAuth();

  ///redirect user  destination
  const location = useLocation();
  const redirect = location?.state?.from || "/";
  console.log(redirect);
  const navigate = useNavigate();

  // for user
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    try {
      if (data.merchant === 'merchant') {

        axios.post('https://iman-xpress.herokuapp.com/api/auth/login', data).then(res => {
          console.log("res", res)
          if (res.data.authToken) {
            const merchantToken = res.data.authToken
            localStorage.setItem("merchant", merchantToken);


            // rider info fetch from database
            axios.post('https://iman-xpress.herokuapp.com/api/auth/getmerchantuser', { hello: 'world' },
              {
                headers: {
                  "auth-token": merchantToken,
                  "Content-Type": "application/json"
                }
              }).then(res => {
                setSuccess(true)
                console.log("res", res.data);
                const merchantInfo = JSON.stringify(res.data)
                console.log(merchantInfo)
                localStorage.setItem("merchantInfo", merchantInfo);
              }
            ).catch(err => {
              setError(true);
              console.log(err)
            })
            Swal.fire({
              icon: 'success',
              title: 'Merchant Login Successfully',
            });
            navigate(redirect)

          }
        }

        ).catch(err => console.log(err))
      }
      if (data.rider === 'rider') {

        // rider login 
        console.log(data.email);
        axios.post('https://iman-xpress.herokuapp.com/api/authRider/login', data).then(res => {
          console.log("res", res.data);
          if (res.data.authToken) {
            const riderToken = res.data.authToken
            localStorage.setItem("riderToken", riderToken);

            // rider info fetch from database
            axios.post('https://iman-xpress.herokuapp.com/api/authRider/getRider', { rider: 'Ok' }, {
              headers: {
                "Authorization": riderToken,
                "Content-Type": "application/json"
              }
            }).then(res => {
              console.log(res.status)
              if (res.status === 200) {
                
                
                 axios.put(`https://iman-xpress.herokuapp.com/api/authRider/updateloginstatus/${data.email}`)
                    .then(res => {
                      console.log(res.change);
                      setLoginstatus(1)
                    }).catch(err => console.log(err))
               
              
              }
              setSuccess(true)
              console.log("res", res.data);
              const riderInfo = JSON.stringify(res.data)
              localStorage.setItem("riderInfo", riderInfo);
            }
            ).catch(err => console.log(err))
            setError(true);

            Swal.fire({
              icon: 'success',
              title: 'Rider Login Successfully',
            });
            navigate(redirect)
          }
        }

        ).catch(err => console.log(err))

      }
      if (data.user === 'user') {
        userLogin(email, password, redirect, navigate)       
        
      }
      
    } catch {
      // setError(true);

    }

    reset();
    // console.log(data);
  };

  ///handle google login
  const handleGoogle = () => {
    googleLogin(redirect, navigate);
  };

  return (
    <div className="login">
      <title>IMan Xpress || Login</title> 
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item>
            <Paper sx={{ p: 5 }} elevation={3}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h4" fontWeight="bold">
                  Login
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
                    label="Email"
                    required
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
                  <FormControl sx={{ textAlign: 'left' }}>
                    {/* <FormLabel>Service(s) you want to provide</FormLabel> */}
                    <RadioGroup
                      name="user"
                      value={value}
                      onChange={handleChange}

                    >
                      <Box required
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <FormControlLabel
                          value="merchant"
                          {...register("merchant")}
                          control={
                            <Radio
                              sx={{
                                "&.Mui-checked": {
                                  color: pink[600],
                                },
                              }}
                            />
                          }
                          label="Merchant"
                        />
                        <FormControlLabel
                          value="rider"
                          {...register("rider")}
                          control={
                            <Radio
                              sx={{
                                "&.Mui-checked": {
                                  color: pink[600],
                                },
                              }}
                            />
                          }
                          label="Rider"
                        />
                        <FormControlLabel
                          value="user"
                          {...register("user")}
                          control={
                            <Radio
                              sx={{
                                "&.Mui-checked": {
                                  color: pink[600],
                                },
                              }}
                            />
                          }
                          label="User"
                        />

                      </Box>
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Typography sx={{ textAlign: "left" }} color={red[700]}>
                  Forget Password?
                </Typography>
                <Box
                  sx={{
                    display: { sm: "none", md: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "40vw",
                    mt: 5,
                  }}
                >
                  {" "}
                  <Box sx={{ textAlign: "left" }}>
                    <Button variant="outlined" color="warning" type="submit">
                      Login
                    </Button>
                  </Box>
                  <Typography sx={{ textAlign: "left", mt: 2 }}>
                    Don’t have an account??{" "}
                    <Link to="/register" style={{ color: "tomato" }}>
                      Sign Up
                    </Link>
                  </Typography>
                </Box>{" "}
              </form>
              <Divider sx={{ mt: 5 }} />
              <Typography variant="h6" sx={{ my: 2 }}>
                Alternative Login
              </Typography>
              <Button
                sx={{ width: "100%" }}
                variant="outlined"
                color="warning"
                onClick={handleGoogle}
              >
                Google Login
              </Button>

              {error && (
                <Alert sx={{ my: 2 }} severity="error">
                  Password not matched.
                </Alert>
              )}
              {success && (
                <Alert sx={{ my: 2 }} severity="success">
                 Logged in successfully
                </Alert>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
