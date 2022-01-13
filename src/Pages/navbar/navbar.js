import * as React from "react";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Home", "About"];
const settings = ["Profile", "Logout"];
const settings2 = ["Landing", "Home", "Challange", "Buddy", "Guide"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElUser2, setAnchorElUser2] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenHeadingMenu = (event) => {
    setAnchorElUser2(event.currentTarget);
  };
  const handleCloseHeadingMenu = (event) => {
    setAnchorElUser2(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      className="navbar-body "
      style={{
        boxShadow: "none",
        background: "#EEEEEE",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            style={{ width: "50px", height: "50px" }}
            src="btplogo2.svg"
            alt="logo"
          />

          <IconButton size="large" color="inherit"></IconButton>
          <Typography
            variant="h4"
            noWrap
            component="div"
            style={{ fontWeight: "bolder" }}
            sx={{
              color: "#F05454",
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <button style={{ border: "none" }} onClick={handleOpenHeadingMenu}>
              Explora
            </button>
            {/* <a>Explora</a> */}
          </Typography>

          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser2}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser2)}
            onClose={handleCloseHeadingMenu}
          >
            {settings2.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseHeadingMenu}>
                <Typography style={{ fontSize: "15px" }} textAlign="center">
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Explora
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                style={{ fontSize: "12px" }}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="image2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography style={{ fontSize: "15px" }} textAlign="center">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

// import * as React from "react";
// import "./navbar.css";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MoreIcon from "@mui/icons-material/MoreVert";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",

//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.25),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.35),
//   },
//   marginRight: theme.spacing(2),
//   width: "100%",

//   [theme.breakpoints.up("md")]: {
//     // marginLeft: theme.spacing(35),
//     width: "48%",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// export default function PrimarySearchAppBar() {
//   return (
//     <div>
//       <nav className=" navbar navbar-expand-lg navbar-light bg-light ">
//         <button
//           className="navbar-toggler navbar-right"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarTogglerDemo01"
//           aria-controls="navbarTogglerDemo01"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//           <nav>
//             <a class="navbar-brand" href="#">
//               <img
//                 src="btplogo.svg"
//                 width="50"
//                 height="30"
//                 class="d-inline-block align-top"
//                 alt=""
//               />
//               Bootstrap
//             </a>
//           </nav>
//           <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">
//                 Home <span className="sr-only">(current)</span>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 About
//               </a>
//             </li>
//           </ul>
//           <ul class="nav navbar-nav navbar-right">
//             <li>
//               <a href="#about">Logout</a>
//             </li>
//             <li>
//               <a href="#contact">Login</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }
