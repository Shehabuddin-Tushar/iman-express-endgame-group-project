import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import usefirebase from '../../Hooks/useFirebase'
import { Link,useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";




const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { user, logOut } = usefirebase();
  const navigate = useNavigate();
  console.log(user.email)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const merchant = localStorage.getItem("merchant");

  const rider = localStorage.getItem("riderToken");
  console.log(merchant)

  const merchantlogout = () => {
    let confirmmessage = window.confirm("are you sure you want to logout")
    if (confirmmessage===true) {
      localStorage.removeItem("merchant");
      localStorage.removeItem("merchantInfo");
      navigate("/")
    }
   
  }

  const riderlogout = () => {
    let confirmmessage = window.confirm("are you sure you want to logout")
    if (confirmmessage === true) {
      localStorage.removeItem("riderToken");
      localStorage.removeItem("riderInfo");
      navigate("/")
    }

  }

  const generallogout = () => {
    let confirmmessage = window.confirm("are you sure you want to logout")
    if (confirmmessage === true) {
     
      logOut();
      
      navigate("/")
    


    }
  }
  return (
    <AppBar position="sticky" sx={{ boxShadow: 0 }} className={styles.navbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="https://i.ibb.co/jz5WkPr/logo.png"
            alt=""
            className={styles.logooursite}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "black" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                key="1"
                onClick={handleCloseNavMenu}
                style={{ width: "200px" }}
              >
                <Typography textAlign="center">Home</Typography>
              </MenuItem>

              <MenuItem
                key="1"
                onClick={handleCloseNavMenu}
                style={{ width: "200px" }}
              >
                <Typography textAlign="center">About us</Typography>
              </MenuItem>
              <MenuItem
                key="1"
                onClick={handleCloseNavMenu}
                style={{ width: "200px" }}
              >
                <Typography textAlign="center">Contact us</Typography>
              </MenuItem>

              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "black" },
            }}
          >
            
            <img src="https://i.ibb.co/jz5WkPr/logo.png" alt="" width="150px"/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="3"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </Button>

            <Button
              key="4"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              <Link
                to="/moreBlogs"
                style={{ textDecoration: "none", color: "black" }}
              >
                Blog
              </Link>
            </Button>
            <Button
              key="4"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              <Link to="/dashboard">Dashboard</Link>
            </Button>

           
            {/* contact us added  */}

            <Link to="/contactUs">
              <Button
                style={{ textDecoration: "none" }}
                key="6"
                sx={{ my: 2, color: "black" }}
              >
                Contact Us
              </Button>
            </Link>

            <Link to="/aboutUs">
              <Button
                style={{ textDecoration: "none" }}
                key="6"
                sx={{ my: 2, color: "black" }}
              >
                About Us
              </Button>
            </Link>

            <Button>
              <a href="https://imanxpress.netlify.app/">
                Chat with Rider
              </a>
            </Button>
          </Box>

          

          <Button
            onClick={handleOpenUserMenu}
            key="5"
            sx={{ my: 2, color: "black", display: "block" }}
          >
           Sign up / Logout
            <IconButton sx={{ p: 0 }}>
              <ArrowDropDownIcon />
            </IconButton>
           
          </Button>
          <Box sx={{ flexGrow: 0 }}>
            
            <Menu
              style={{ marginTop: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {
                user.email && merchant==null ?<MenuItem

                      onClick={handleCloseUserMenu}
                      style={{ width: "200px" }}
                    >

                  <Button onClick={generallogout}>Logout</Button> 


                </MenuItem> : !user.email && merchant ?<MenuItem

                      onClick={handleCloseUserMenu}
                      style={{ width: "200px" }}
                    >

                    <Button onClick={merchantlogout}>Merchant logout</Button>


                  </MenuItem> : !user.email && merchant == null && rider ? <MenuItem

                      onClick={handleCloseUserMenu}
                      style={{ width: "200px" }}
                    >

                      <Button onClick={riderlogout}>Rider logout</Button>


                    </MenuItem>:
                  <>
                    <MenuItem

                      onClick={handleCloseUserMenu}
                      style={{ width: "200px" }}
                    >

                      <Link to="/register"><Typography textAlign="center">general account</Typography></Link>


                    </MenuItem>

                    <MenuItem

                      onClick={handleCloseUserMenu}
                      style={{ width: "200px" }}
                    >

                      <Link to="/merchant"><Typography textAlign="center">Merchant account</Typography></Link>
                      {/* <Button onClick={merchantlogout}>Merchant logout</Button> */}


                    </MenuItem>

                    <MenuItem

                      onClick={handleCloseUserMenu}
                      style={{ width: "200px" }}
                    >
                      <Link to="/rider"><Typography textAlign="center">Rider account</Typography></Link>
                    </MenuItem>
                  </>
              }

              
              
                
             
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
