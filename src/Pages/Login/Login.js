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
import { grey, red } from "@mui/material/colors";
import { Box, color } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { googleLogin, userLogin } = useFirebase();
  const { register, handleSubmit, reset } = useForm();

  ///redirect user  destination
  const location = useLocation();
  const redirect = location?.state?.from || "/";
  console.log(redirect);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    try {
      userLogin(email, password, redirect, navigate);
      setSuccess(true);
      reset();
    } catch {
      setError(true);
    }
    console.log(data);
  };

  ///handle google login
  const handleGoogle = () => {
    googleLogin(redirect, navigate);
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
                    type="Password"
                    sx={{ my: 2, width: "100%" }}
                    variant="outlined"
                    {...register("password")}
                  />
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
                    <Link style={{ color: "tomato" }} to="/register">
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
                  Account successfully created.
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
