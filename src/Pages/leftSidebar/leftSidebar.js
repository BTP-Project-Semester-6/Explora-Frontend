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

function LeftSideBar() {
  return (
    <div>
      <div className="glass right-box">
        <div
          style={{
            width: "100%",
            minHeight: "100px",
            margin: "0",
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
              width: 400,
              height: 50,
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
        <div className="left-up">
          <div className="nav-buttons">
            <Button variant="text">Option 2</Button>
          </div>
          <div className="nav-buttons">
            <Button color="success" variant="text">
              Option 2
            </Button>
          </div>
          <div className="nav-buttons">
            <Button color="secondary" variant="text">
              Option 3
            </Button>
          </div>
          <div className="nav-buttons">
            <Button color="success" variant="text">
              Option 3
            </Button>
          </div>
        </div>
        <hr style={{ margin: "5px" }}></hr>
        <div className="heading-sug">Contacts</div>
        <div className="sug-scroll-left">
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
        </div>
      </div>
    </div>
  );
}
export default LeftSideBar;
