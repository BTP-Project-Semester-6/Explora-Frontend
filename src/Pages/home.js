import "./home.css";
import LeftSideBar from "./leftSidebar/leftSidebar";
import Post from "./Post/post";
import RightSideBar from "./RightSidebar/rightSideBar";
import Navbar from "./navbar/navbar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function Home() {
  return (
    <div className="home-body">
      <Navbar></Navbar>

      <div className="row">
        <div className="left-sidebar">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="post">
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
        <div className="right-sidebar">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
}
