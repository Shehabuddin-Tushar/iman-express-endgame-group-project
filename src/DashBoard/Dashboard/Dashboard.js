import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import AddTaskIcon from "@mui/icons-material/AddTask";
import BarChartIcon from "@mui/icons-material/BarChart";
import ClassIcon from "@mui/icons-material/Class";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import BD from "../images/bd.png";
import logo from "../images/logo.png";
import "./Dashboard.css";

const drawerWidth = 220;

function Nav(props) {
  // const { user, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List sx={{ p: 2, marginTop: "-65px" }}>
        <div className="side_img_wrapper">
          <div className="side_img_span">
            <img
              className="img-fluid side_img"
              width="100px"
              src={logo}
              alt=""
            />{" "}
          </div>
        </div>
      </List>
      {/* List of Route */}
      <div className=" list_of_route">
        <List>
          <Link className="" to="/">
            <span className="me-3">
              <HomeIcon />
            </span>{" "}
            Home
          </Link>
        </List>{" "}
        <Box>
          <List>
            <Link className="" to="/dashboard/dashboardHome">
              <span className="me-3">
                <BarChartIcon />
              </span>{" "}
              Dashboard
            </Link>
          </List>
          <List>
            <Link className="" to="/dashboard/make-admin">
              <span className="me-3">
                <AddModeratorIcon />
              </span>
              Admin
            </Link>
          </List>{" "}
        </Box>
        <List>
          <Link className="" to="/dashboard/userOrders">
            <span className="me-3">
              <ClassIcon></ClassIcon>
            </span>{" "}
            Your Orders
          </Link>
        </List>{" "}
        <Box>
          <List>
            <Link className="" to="/dashboard/all-products">
              <span className="me-3">
                <GroupsIcon />
              </span>{" "}
              All Products
            </Link>
          </List>{" "}
          <List>
            <Link className="" to="/dashboard/add-products">
              <span className="me-3">
                <AddTaskIcon></AddTaskIcon>
              </span>{" "}
              Add products
            </Link>
          </List>{" "}
        </Box>
        <List>
          <Link className="" to="/dashboard/rate-us">
            <span className="me-3">
              <ThumbsUpDownIcon />
            </span>{" "}
            Rate us
          </Link>
        </List>{" "}
        <List>
          <Link className="" to="/dashboard/payment">
            <span className="me-3">
              <AccountBalanceIcon />
            </span>{" "}
            Payment
          </Link>
        </List>{" "}
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
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
          backgroundColor: "rgba(255, 255, 255, 0.8)",
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
            <img src={logo} className="img-fluid user_img" alt="" />
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
              backgroundColor: "#343434 ",
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
