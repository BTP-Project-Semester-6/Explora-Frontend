import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { styled, useTheme } from "@mui/material/styles";

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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
                style={{ float: "left", width: "80px", height: "50px" }}
                src="btplogo2.svg"
                alt="logo"
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
          <List>
            {["Home", "Challenge", "Buddy", "Profile", "PrePlaning"].map(
              (text, index) => (
                <ListItem button key={text}>
                  {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                  <ListItemText
                    primaryTypographyProps={{ fontSize: "15px" }}
                    primary={text}
                  />
                </ListItem>
              )
            )}
          </List>

          <Divider />

          <List>
            {["Profile", "Login", "Logout", "Register"].map((text, index) => (
              <ListItem button key={text}>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText
                  primaryTypographyProps={{ fontSize: "15px" }}
                  primary={text}
                />
              </ListItem>
            ))}
          </List>
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
            sx={{ flexGrow: 1, color: "#FE7E6D" }}
            style={{ fontWeight: 600 }}
          >
            Explora
          </Typography>
          <Button
            style={{ fontSize: "15px" }}
            sx={{ color: "black" }}
            color="inherit"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
