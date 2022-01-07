import React, { useState } from "react";
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
import "./buddy.scss";
import { getBuddyByCity } from "../../actions/buddyAction";
import {
  getGuideAndBuddyByCity,
  getGuideByCity,
} from "../../actions/guideAction";
import { useDispatch, useSelector } from "react-redux";
export default function Buddy() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const { buddy } = useSelector((state) => state.getGuideAndBuddyByCityReducer);
  const { guide } = useSelector((state) => state.getGuideAndBuddyByCityReducer);

  // const [buddys, setBuddys] = useState([]);

  console.log(guide);
  console.log(buddy);

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (city === "") {
      alert("Please enter city!");
    } else {
      dispatch(getGuideAndBuddyByCity(city));
      // dispatch(getGuideByCity(city));
      // if (buddy !== []) {
      //   setBuddys(buddy);
      // }
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        margin: "0",
        padding: "0",
      }}
    >
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
          onSubmit={SubmitHandler}
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
            placeholder="City"
            inputProps={{ "aria-label": "search google maps" }}
            style={{ textTransform: "lowercase" }}
            onChange={(e) => setCity(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <div
        style={{
          width: "100%",
          minHeight: "700px",
          margin: "0",
          padding: "0",
          display: "flex",
        }}
      >
        <div
          className="guide-scroll"
          style={{
            width: "25%",
            minHeight: "100%",
            padding: "0",
            display: "vertical",
            margin: "auto",
            marginTop: "0",
            padding: "auto",
            overflowY: "auto",
            overflowX: "hidden",
            height: "90vh",
          }}
        >
          <div className="twelve">
            <h1>GUIDES</h1>
          </div>
          <div
            style={{
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/1/15/Gwalior_1.JPG"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ramesh
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Guide in gwalior fort. Rs.200 per trip. All seven forts and 3
                  temples inside gwalior fort.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">VIEW PROFILE</Button>
              </CardActions>
            </Card>
          </div>

          <div
            style={{
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/1/15/Gwalior_1.JPG"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ramesh
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Guide in gwalior fort. Rs.200 per trip. All seven forts and 3
                  temples inside gwalior fort.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">VIEW PROFILE</Button>
              </CardActions>
            </Card>
          </div>

          <div
            style={{
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/1/15/Gwalior_1.JPG"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ramesh
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Guide in gwalior fort. Rs.200 per trip. All seven forts and 3
                  temples inside gwalior fort.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">VIEW PROFILE</Button>
              </CardActions>
            </Card>
          </div>
        </div>
        <div
          className="buddy-scroll"
          style={{
            width: "75%",
            padding: "0",
            display: "vertical",
            margin: "auto",
            marginTop: "0",
            padding: "auto",
            overflowY: "auto",
            overflowX: "hidden",
            height: "90vh",
          }}
        >
          <div className="twelve">
            <h1>BUDDYS</h1>
          </div>

          <div className="horizontal-card">
            <div className="horizontal-card-body" style={{ width: "100%" }}>
              <div className="orders" style={{ width: "100%" }}>
                <div>
                  <p className="name" style={{ float: "left" }}>
                    host name (12/01/22 - 14/01/22)
                  </p>
                </div>
                <div style={{ float: "right" }}>👨‍👨‍👦‍👦5Buddies 🗺️Gwalior</div>
              </div>
              <div>
                <p className="order">
                  The Gwalior Fort (Gwāliiyar Qila) is a hill fort near Gwalior,
                  Madhya Pradesh, India. The fort has existed at least since the
                  10th century, and the inscriptions and monuments found within
                  what is now the fort campus indicate that it may have existed
                  as early as the beginning of the 6th century. The modern-day
                  fort, consisting a defensive structure and two palaces was
                  built by Tomar Rajput ruler Man Singh Tomar.[1] The fort has
                  been controlled by a number of different rulers in its
                  history.
                </p>
                <p
                  style={{
                    backgroundColor: "#D4D4D4",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <b>Buddies</b>
                  <br />
                  <i>
                    <a style={{ color: "#DD4AB", cursor: "pointer" }}>
                      nalinagrawal333
                    </a>
                    ,
                    <a style={{ color: "#DD4AB", cursor: "pointer" }}>
                      prerit2001
                    </a>{" "}
                    ,{" "}
                    <a style={{ color: "#DD4AB", cursor: "pointer" }}>
                      him_reane
                    </a>
                    ,
                    <a style={{ color: "#DD4AB", cursor: "pointer" }}>
                      vijay_joshi
                    </a>
                  </i>
                </p>
              </div>

              <div className="profile">
                <Button variant="contained" href="#contained-buttons">
                  Join Group
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
