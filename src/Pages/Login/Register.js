import {
  Alert,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Container>
        <Grid
          container
          sx={{
            height: "80vh",
            mt: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          spacing={3}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={5}>
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
                  sx={{ mt: 2, width: "75%" }}
                  variant="outlined"
                  {...register("name")}
                />
                <TextField
                  label="Email"
                  required
                  type="email"
                  sx={{ mt: 2, width: "75%" }}
                  variant="outlined"
                  {...register("email")}
                />
                <TextField
                  required
                  label="Password"
                  type="Password"
                  sx={{ mt: 2, width: "75%" }}
                  variant="outlined"
                  {...register("password")}
                />
                <TextField
                  required
                  label="Confirm Password"
                  type="Password"
                  sx={{ my: 2, width: "75%" }}
                  variant="outlined"
                  {...register("confirmPassword")}
                />
              </Box>
            </form>
            <Divider sx={{ m: 2 }} />
            <Typography>
              Already have an Account?{" "}
              <Link style={{ color: "tomato" }} to="/login">
                Login
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
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
