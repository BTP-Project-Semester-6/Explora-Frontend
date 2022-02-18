import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MmsIcon from "@mui/icons-material/Mms";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import HomeIcon from "@mui/icons-material/Home";
import NearMeIcon from "@mui/icons-material/NearMe";

import { styled, useTheme } from "@mui/material/styles";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TourIcon from "@mui/icons-material/Tour";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NearbyErrorIcon from "@mui/icons-material/NearbyError";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ExplicitIcon from "@mui/icons-material/Explicit";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react/cjs/react.development";
import jwt_decode from "jwt-decode";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupIcon from "@mui/icons-material/Group";
const drawerWidth = 240;

const styles = (theme) => ({
  listItemText: {
    fontSize: "0.7em", //Insert your required size
  },
});

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function ButtonAppBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      setLoggedIn(false);
    } else if (localStorage.getItem("token") != "null") {
      const decoded = jwt_decode(localStorage.getItem("token"));
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        if (decoded) {
          setUser(decoded);
          setLoggedIn(true);
        }
      }
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleNavigation(text) {
    if (text == "Profile") {
      navigate(`/profile/${user._id}`);
    } else if (text == "Home") {
      navigate("/home");
    } else if (text == "Challenges") {
      navigate("/challenge");
    } else if (text == "Buddies") {
      navigate("/buddy");
    } else if (text == "PrePlanning") {
      navigate("/preplanning");
    } else if (text == "Logout") {
      localStorage.removeItem("token");
      window.location.reload(false);
    } else if (text == "Explora") {
      navigate("/");
    } else if (text == "Login") {
      navigate("/login");
    } else if (text == "Register") {
      navigate("/register");
    } else if (text == "Visit Nearby") {
      navigate("/places");
    } else if (text == "Find Friends") {
      navigate("/friends");
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          boxShadow: "none",
          background: "#EEEEEE",
        }}
        position="static"
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <div style={{ width: "100%" }}>
              <img
                style={{
                  float: "left",
                  width: "80px",
                  height: "50px",
                  cursor: "pointer",
                }}
                src="btplogo2.svg"
                alt="logo"
                onClick={(e) => navigate("/")}
              />
            </div>

            <IconButton
              onClick={handleDrawerClose}
              style={{ transform: "scale(1.8)" }}
            >
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          {loggedIn && (
            <div>
              <List>
                {[
                  "Profile",
                  "Home",
                  "Challenges",
                  "Buddies",
                  "PrePlanning",
                  "Visit Nearby",
                  "Find Friends",
                  "Logout",
                ].map((text, index) => (
                  <ListItem
                    button
                    key={text}
                    onClick={(e) => handleNavigation(text)}
                  >
                    <ListItemIcon>
                      {text == "Profile" && (
                        <PersonPinIcon style={{ fontSize: "20px" }} />
                      )}
                      {text == "Home" && (
                        <HomeIcon style={{ fontSize: "20px" }} />
                      )}
                      {text == "Logout" && (
                        <PowerSettingsNewIcon
                          style={{ fontSize: "20px", color: "red" }}
                        />
                      )}
                      {text == "PrePlanning" && (
                        <TourIcon style={{ fontSize: "20px" }} />
                      )}
                      {text == "Buddies" && (
                        <GroupAddIcon style={{ fontSize: "20px" }} />
                      )}
                      {text == "Challenges" && (
                        <NearbyErrorIcon style={{ fontSize: "20px" }} />
                      )}
                      {text == "Visit Nearby" && (
                        <NearMeIcon style={{ fontSize: "20px" }} />
                      )}
                      {text == "Find Friends" && (
                        <PersonAddIcon style={{ fontSize: "20px" }} />
                      )}
                    </ListItemIcon>
                    {text == "Logout" && (
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "15px",
                          color: "red",
                        }}
                        primary={text}
                      />
                    )}
                    {text != "Logout" && (
                      <ListItemText
                        primaryTypographyProps={{ fontSize: "15px" }}
                        primary={text}
                      />
                    )}
                  </ListItem>
                ))}
              </List>

              <Divider />

              <List>
                {["Guide Section", "Why Explora ?", "About Us", "Feedback"].map(
                  (text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon>
                        {text == "Guide Section" && (
                          <AssistantDirectionIcon
                            style={{ fontSize: "20px" }}
                          />
                        )}
                        {text == "Feedback" && (
                          <ThumbUpAltIcon style={{ fontSize: "20px" }} />
                        )}
                        {text == "Why Explora ?" && (
                          <ExplicitIcon style={{ fontSize: "20px" }} />
                        )}
                        {text == "About Us" && (
                          <DeveloperModeIcon style={{ fontSize: "20px" }} />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{ fontSize: "15px" }}
                        primary={text}
                      />
                    </ListItem>
                  )
                )}
              </List>

              <Divider />
            </div>
          )}
          {!loggedIn && (
            <List>
              {["Login", "Register", "Why Explora ?", "About Us"].map(
                (text, index) => (
                  <ListItem
                    button
                    key={text}
                    onClick={(e) => handleNavigation(text)}
                  >
                    <ListItemIcon>
                      {text == "Login" && (
                        <LoginIcon style={{ fontSize: "20px" }} />
                      )}
                      {text == "Register" && (
                        <AppRegistrationIcon style={{ fontSize: "20px" }} />
                      )}
                      {text == "Why Explora ?" && (
                        <ExplicitIcon style={{ fontSize: "20px" }} />
                      )}
                      {text == "About Us" && (
                        <DeveloperModeIcon style={{ fontSize: "20px" }} />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{ fontSize: "15px" }}
                      primary={text}
                    />
                  </ListItem>
                )
              )}
            </List>
          )}
        </Drawer>
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            style={{ transform: "scale(1.8)" }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, color: "#FE7E6D", cursor: "pointer" }}
            style={{ fontWeight: 600 }}
            onClick={(e) => navigate("/")}
          >
            Explora
          </Typography>
          {!loggedIn && (
            <Button
              style={{ fontSize: "15px" }}
              sx={{ color: "black" }}
              color="inherit"
              onClick={(e) => navigate("/login")}
            >
              Login
            </Button>
          )}

          {loggedIn && (
            <div>
              <HomeIcon
                style={{ color: "black", fontSize: "30px", cursor: "pointer" }}
                onClick={(e) => navigate("/home")}
              />
              <GroupIcon
                style={{
                  color: "black",
                  fontSize: "30px",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
                onClick={(e) => navigate(`/myfriends`)}
              />
              <PersonPinIcon
                style={{
                  color: "black",
                  fontSize: "30px",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
                onClick={(e) => navigate(`/profile/${user._id}`)}
              />
              <PowerSettingsNewIcon
                style={{
                  color: "red",
                  fontSize: "30px",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  localStorage.removeItem("token");
                  window.location.reload(false);
                }}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
