import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Offline, Online } from "react-detect-offline";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box sx={{ bgcolor: "rgb(0 0 0)", color: "#706f6d", pt: 10 }}>
      {/* <div>
        <Online ><p style={{ color: "green" }}>Only shown when you're online</p></Online>
        <Offline ><p style={{ color: "red" }}>Only shown offline (surprise!)</p></Offline>
      </div> */}
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={6}>
            <Box>
              <img
                className="footerimg"
                style={{marginLeft:"-30px"}}
                src="https://i.postimg.cc/Vvdv93dn/imanimage.png"
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
                  <a href="https://www.facebook.com/" target="_blank"><i className="fas fa-vr-cardboard" style={{ color: "white" }}></i></a>
                </li>
                <li className="footer-icon">
                  <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-twitter" style={{ color: "white" }}></i></a>
                </li>
                <li className="footer-icon">
                  <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" style={{ color: "white" }}></i></a>
                </li>
                <li className="footer-icon">
                  <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" style={{ color: "white" }}></i></a>
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
                <Typography variant="body.1"><Link to="/home" style={{textDecoration:"none", color: "white"}}>Home</Link></Typography>
              </li>
              <li>
                <Typography variant="body.1"><Link to="/home" style={{textDecoration:"none", color: "white"}}>Tournaments</Link></Typography>
              </li>

              <li>
                <Typography variant="body.1"><Link to="/aboutUs" style={{textDecoration:"none", color: "white"}}>About</Link></Typography>
              </li>
              <li>
                <Typography variant="body.1"><Link to="/home" style={{textDecoration:"none", color: "white"}}>Reviews</Link></Typography>
              </li>
              <li>
                <Typography variant="body.1"><Link to="/contactUS" style={{textDecoration:"none", color: "white"}}>Contact Us</Link></Typography>
              </li>
              <li>
                <Typography variant="body.1"><Link to="/blogs" style={{textDecoration:"none", color: "white"}}>Blogs</Link></Typography>
              </li>
              <li>
                <Typography variant="body.1"><Link to="/home" style={{textDecoration:"none", color: "white"}}>VR 3D</Link></Typography>
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
                <Typography variant="body.1"><Link to="/home" style={{textDecoration:"none", color: "white"}}>Create Account</Link></Typography>
              </li>
              <li>
                <Typography variant="body.1"><Link to="/home" style={{textDecoration:"none", color: "white"}}>Subscription</Link></Typography>
              </li>

              <li>
                <Typography variant="body.1"><Link to="/home" style={{textDecoration:"none", color: "white"}}>Affiliat</Link></Typography>
              </li>
              <li>
                <Typography variant="body.1"><Link to="/home" style={{textDecoration:"none", color: "white"}}>Site Condition</Link></Typography>
              </li>
              <li>
                <Typography variant="body.1"><Link to="/home" style={{textDecoration:"none", color: "white"}}>IMAN Shop</Link></Typography>
              </li>
              <li>
                <Typography variant="body.1"><Link to="/home" style={{textDecoration:"none", color: "white"}}>IMAN Madicine</Link></Typography>
              </li>
              <li>
                <Typography variant="body.1"><Link to="/home" style={{textDecoration:"none", color: "white"}}>IMAN Food</Link></Typography>
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
                <Typography variant="body.1"><Link to="/home" style={{textDecoration:"none", color: "white"}}>FAQ</Link></Typography>
              </li>
              <li>
                <Typography variant="body.1"><Link to="/home" style={{textDecoration:"none", color: "white"}}>Site Maps</Link></Typography>
              </li>

              <li>
                <Typography variant="body.1"><Link to="/home" style={{textDecoration:"none", color: "white"}}>Privacy Policy</Link></Typography>
              </li>
              <li>
                <Typography variant="body.1"><Link to="/contactUs" style={{textDecoration:"none", color: "white"}}>Contact Us</Link></Typography>
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
