import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "rgb(0 0 0)", color: "#706f6d", pt: 10 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={6}>
            <Box>
              <img
                className="img"
                src="https://i.ibb.co/pZsbPZj/IMan-Xpress.png"
                alt=""
              />
              <br />
              <Typography variant="body.1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                velit voluptatum eligendi laboriosam beatae accusantium
                molestiae illo est distinctio possimus?
              </Typography>
              <ul
                style={{ display: "flex", padding: "0px", marginTop: "30px" }}
              >
                <li className="footer-icon">
                  <a href="https://www.facebook.com/" target="_blank"><i className="fas fa-vr-cardboard" style={{color: "white"}}></i></a>
                </li>
                <li className="footer-icon">
                  <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-twitter" style={{color: "white"}}></i></a>
                </li>
                <li className="footer-icon">
                  <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" style={{color: "white"}}></i></a>
                </li>
                <li className="footer-icon">
                  <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" style={{color: "white"}}></i></a>
                </li>
              </ul>
              <Typography sx={{ mt: 4 }}>We are in</Typography>
              <a href="https://www.google.com" target="_blank">
              <img
                style={{ width: "120px" }}
                src="https://pathao.com/wp-content/uploads/2019/03/Google-Play-footer-.png"
                alt=""
              />
              </a>
              <a href="https://www.google.com" target="_blank">
              <img
                style={{ width: "120px" }}
                src="https://pathao.com/wp-content/uploads/2019/03/App-Store-footer-.png"
                alt=""
              />
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={6}>
            <Box sx={{ lineHeight: 2 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                Platform
              </Typography>
              <li>
                <Typography variant="body.1">Home</Typography>
              </li>
              <li>
                <Typography variant="body.1">Tournaments</Typography>
              </li>

              <li>
                <Typography variant="body.1">About Us</Typography>
              </li>
              <li>
                <Typography variant="body.1">Reviews</Typography>
              </li>
              <li>
                <Typography variant="body.1">Contact Us</Typography>
              </li>
              <li>
                <Typography variant="body.1">Blogs</Typography>
              </li>
              <li>
                <Typography variant="body.1">VR 3D</Typography>
              </li>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={6}>
            <Box sx={{ lineHeight: 2 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                Merchant
              </Typography>
              <li>
                <Typography variant="body.1">Create Account</Typography>
              </li>
              <li>
                <Typography variant="body.1">Subscription</Typography>
              </li>

              <li>
                <Typography variant="body.1">Affiliat</Typography>
              </li>
              <li>
                <Typography variant="body.1">Site Condition</Typography>
              </li>
              <li>
                <Typography variant="body.1">IMAN Shop</Typography>
              </li>
              <li>
                <Typography variant="body.1">IMAN Madicine</Typography>
              </li>
              <li>
                <Typography variant="body.1">IMAN Food</Typography>
              </li>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={6}>
            <Box sx={{ lineHeight: 2 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                Information
              </Typography>
              <li>
                <Typography variant="body.1">FAQ</Typography>
              </li>
              <li>
                <Typography variant="body.1">Site Maps</Typography>
              </li>

              <li>
                <Typography variant="body.1">Privacy Policy</Typography>
              </li>
              <li>
                <Typography variant="body.1">Contact Us</Typography>
              </li>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ py: 6 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              borderTop: "1px solid white",
            }}
          >
            <Typography variant="body.1" sx={{ pt: 2 }}>
              2021-2030 - IMAN Xpress
            </Typography>
            <Typography variant="body.1" sx={{ pt: 2 }}>
              All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
