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
import useFirebase from "../../Hooks/useFirebase";

const Register = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { registerUser } = useFirebase();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      registerUser(data.email, data.password, data.name);
      setError(false);
      setSuccess(true);
      reset();
    } else {
      setError(true);
    }
  };

  return (
    <div className="login">
      <title>IMan Xpress || General register</title> 
      <Container>
        <Grid
          container
          sx={{
            height: "100vh",
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
            <Paper sx={{ p: 5 }} elevation={3}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h4" fontWeight="bold">
                  Register
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
                    label="Name"
                    required
                    sx={{ mt: 2, width: "100%" }}
                    variant="outlined"
                    {...register("name")}
                  />
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
                    sx={{ mt: 2, width: "100%" }}
                    variant="outlined"
                    {...register("password")}
                  />
                  <TextField
                    required
                    label="Confirm Password"
                    type="Password"
                    sx={{ my: 2, width: "100%" }}
                    variant="outlined"
                    {...register("confirmPassword")}
                  />
                </Box>

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
                    <Button
                      onClick={registerUser}
                      variant="outlined"
                      color="warning"
                      type="submit"
                    >
                      Register
                    </Button>
                  </Box>
                  <Typography sx={{ mt: 2 }}>
                    Already have an Account?{" "}
                    <Link  to="/login" style={{ color: "tomato" }}>
                      Login
                    </Link>
                  </Typography>
                </Box>
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
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
