import React,{useState,useEffect} from 'react'
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import AddTaskIcon from "@mui/icons-material/AddTask";
import BarChartIcon from "@mui/icons-material/BarChart";
import CategoryIcon from "@mui/icons-material/Category";
import ClassIcon from "@mui/icons-material/Class";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";

import { Link, Outlet } from "react-router-dom";
import BD from "../images/bd.png";
import logo from "../images/logo.png";
import usefirebase from '../../Hooks/useFirebase'
import "./Dashboard.css";
import axios from 'axios';
import Dashboardhome from './Dashboardhome/Dashboardhome';

const drawerWidth = 220;

function Nav(props) {

  const [uservalue, setUservalue] = useState({});

  

  const merchanttoken = localStorage.getItem("merchant");
  const ridertoken = localStorage.getItem("riderToken");

  const { user, logOut } = usefirebase();
  console.log(user.email)

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  useEffect(() => {
    axios.get(`https://iman-xpress.herokuapp.com/api/authgeneral/getuserdata/${user.email}`).then((res) => setUservalue(res.data)).catch((err) => console.log(err))

  },[user.email])
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List sx={{ marginTop: "-65px" }}>
        <div className="side_img_wrapper">
          <div className="overly"></div>
          <div className="side_img_span ">
            <img width="100px" src={logo} alt="" />{" "}
          </div>
          <div className="hr"></div>

          <div className="user_img">
            <img
              src="https://bidinnovacion.org/economiacreativa/wp-content/uploads/2014/10/speaker-3.jpg"
              alt=""
            />
          </div>
        </div>
      </List>
      {/* List of Route */}
      <div className=" list_of_route">
        <List>
          <Link className="" to="/">
            <span>
              <HomeIcon />
            </span>
            Home
          </Link>
        </List>{" "}
        <Box>
        

          {
            merchanttoken ? <>
              
              <List>
                <Link className="" to="/dashboard/marchant/add-products">
                  <span>
                    <ClassIcon></ClassIcon>
                  </span>{" "}
                  Profile
                </Link>
              </List>

              <List>
                <Link className="" to="/dashboard/marchant/add-products">
                  <span>
                    <ClassIcon></ClassIcon>
                  </span>{" "}
                 Add product
                </Link>
              </List>
              
              <List>
                <Link className="" to="/dashboard/marchant/manageproduct">
                  <span>
                    <ClassIcon></ClassIcon>
                  </span>{" "}
                 Manage product
                </Link>
              </List>
              <List>
                <Link className="" to="/dashboard">
                  <span>
                    <ClassIcon></ClassIcon>
                  </span>{" "}
                   Orders
                </Link>
              </List>
            </>:""
          }

          {
            ridertoken ? <>
           
              <List>
                <Link className="" to="/dashboard">
                  <span>
                    <ClassIcon></ClassIcon>
                  </span>{" "}
                   Rider profile
                </Link>
              </List>
              <List>
                <Link className="" to="/dashboard/rider/profile">
                  <span>
                    <ClassIcon></ClassIcon>
                  </span>{" "}
                  profile manage
                </Link>
              </List>

              <List>
                <Link className="" to="/dashboard/rider/setting">
                  <span>
                    <ClassIcon></ClassIcon>
                  </span>{" "}
                  Settings
                </Link>
              </List>

              <List>
                <Link className="" to="/dashboard">
                  <span>
                    <ClassIcon></ClassIcon>
                  </span>{" "}
                  client message
                </Link>
              </List>
            
            </>:""
              
          }

          {
           user.email && uservalue?.role=="viewer" ?
              <>
                <List>
                  <Link className="" to="/dashboard">
                    <span>
                      <ClassIcon></ClassIcon>
                    </span>{" "}
                    My order
                  </Link>
                </List>
                <List>
                  <Link className="" to="/dashboard">
                    <span>
                      <ClassIcon></ClassIcon>
                    </span>{" "}
                    payment option
                  </Link>
                </List>
            </> : ""
          }

          {
            user?.email && uservalue?.role == "admin" ?
              <>
                <List>
                  <Link className="" to="/dashboard/addBlog">
                    <span>
                      <ClassIcon></ClassIcon>
                    </span>{" "}
                    Add blog
                  </Link>
                </List>
                <List>
                  <Link className="" to="/dashboard/manageBlog">
                    <span>
                      <ClassIcon></ClassIcon>
                    </span>{" "}
                    Manage blog
                  </Link>
                </List>
                
              </> : ""
          }
          
                   
        </Box>
        
        <Box>
          
        </Box>
        <List>
          
        </List>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{display:"flex"}}>
      
      <CssBaseline />
     
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          flexShrink: 0,
          top: "0px",
          left: "auto",
          right: "0px",
          color: "rgb(255, 255, 255)",
          backdropFilter: "blur(2px)",
          backgroundColor: "#fff",
          boxShadow: " rgb(199 199 199 / 24%) 0px 8px 16px 0px",
          height: "64px",
          zIndex: "1101",
          transition:
            "width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#000000" }} />
          </IconButton>
          <Box className="toolbar_box">
            <img src={BD} className="img-fluid flag_img" alt="" />
            <IconButton sx={{ mr: 2 }}>
              <GroupTwoToneIcon />
            </IconButton>
            <IconButton sx={{ mr: 2 }}>
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <img
              src="https://bidinnovacion.org/economiacreativa/wp-content/uploads/2014/10/speaker-3.jpg"
              className="toolbar_img"
              alt=""
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgb(0, 0, 0) ;",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#203239",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: "-20px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Nav.propTypes = {
  window: PropTypes.func,
};

export default Nav;
