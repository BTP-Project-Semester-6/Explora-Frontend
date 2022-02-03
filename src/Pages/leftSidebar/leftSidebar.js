import Suggestion from "../showFriend/suggestion";
import Button from "@mui/material/Button";
import "./leftSideBar.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

function LeftSideBar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="right-box">
        <div
          // className="left-up"
          style={{
            margin: "10px",
            textAlign: "center",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "20px",
            background: "white",
          }}
        >
          <div
            className="heading-sug"
            style={{ fontSize: "20px", paddingTop: "20px" }}
          >
            <b>Create</b>
          </div>
          <div className="nav-buttons">
            <Button
              style={{ fontSize: "16px" }}
              onClick={(e) => navigate("/createpost")}
            >
              <NoteAddIcon style={{ fontSize: "25px" }} />
              Post
            </Button>
          </div>
          <div className="nav-buttons">
            <Button
              style={{ fontSize: "16px" }}
              variant="text"
              onClick={(e) => navigate("/createbuddy")}
            >
              <NoteAddIcon style={{ fontSize: "25px" }} />
              Buddy
            </Button>
          </div>
          <div className="nav-buttons">
            <Button
              style={{ fontSize: "16px" }}
              onClick={(e) => navigate("/createchallenge")}
            >
              <NoteAddIcon style={{ fontSize: "25px" }} /> Challenge
            </Button>
          </div>
          <div className="nav-buttons" style={{ paddingBottom: "20px" }}>
            <Button
              style={{ fontSize: "16px" }}
              onClick={(e) => navigate("/preplanningpost")}
            >
              <NoteAddIcon style={{ fontSize: "25px" }} /> PrePlanning
            </Button>
          </div>
          {/* <div className="nav-buttons">
            <Button color="success" variant="text">
              Option 3
            </Button>
          </div> */}
        </div>
        {/* <hr style={{ margin: "10px" }}></hr> */}
        <div
          style={{
            margin: "10px",
            marginTop: "50px",
            textAlign: "center",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "20px",
            padding: "20px",
            background: "white",
          }}
        >
          <div className="heading-sug" style={{ fontSize: "20px" }}>
            <b>Friends</b>
          </div>
          <div
            style={{
              width: "100%",
              minHeight: "50px",
              marginBottom: "10px",
              padding: "auto",
              display: "flex",
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 300,
                height: 40,
              }}
              style={{
                margin: "auto",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
          <div
            className="leftfriends"
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              overflowY: "auto",
              height: "250px",
            }}
          >
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSideBar;
