import {
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
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
                  sx={{ mt: 2, width: "75%" }}
                  variant="outlined"
                  {...register("email")}
                />
                <TextField
                  required
                  label="Password"
                  type="Password"
                  sx={{ my: 2, width: "75%" }}
                  variant="outlined"
                  {...register("password")}
                />
              </Box>
              <Button type="submit">Login</Button>
            </form>
            <Divider sx={{ m: 2 }} />
            <Typography>
              Create an Account?{" "}
              <Link style={{ color: "tomato" }} to="/register">
                Register
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
