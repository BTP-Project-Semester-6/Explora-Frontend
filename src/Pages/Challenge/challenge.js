import React from "react";
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
import "./challenge.scss";
export default function Challenge() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "700px",
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
          style={{
            width: "30%",
            minHeight: "100%",
            padding: "0",
            display: "vertical",
            margin: "auto",
            marginTop: "0",
            padding: "auto",
          }}
        >
          <div class="twelve">
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
        </div>
        <div
          style={{
            width: "70%",
            minHeight: "100%",
            padding: "0",
            display: "vertical",
            margin: "auto",
            marginTop: "0",
            padding: "auto",
          }}
        >
          <div class="twelve">
            <h1>CHALLENGES</h1>
          </div>
          <div className="horizontal-card">
            <div
              style={{
                width: "150px",
                height: "100%",
                padding: "auto",
                marginTop: "30px",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/15/Gwalior_1.JPG"
                alt=""
              />
            </div>
            <div className="horizontal-card-body" style={{ width: "100%" }}>
              <div className="orders" style={{ width: "100%" }}>
                <div>
                  <p className="name" style={{ float: "left" }}>
                    challenge name
                  </p>
                </div>
                <div style={{ float: "right" }}>⏱️24 hours 🗺️Gwalior</div>
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
              </div>

              <div className="profile">
                <Button variant="contained" href="#contained-buttons">
                  Start Challenge
                </Button>
              </div>
            </div>
          </div>

          <div className="horizontal-card">
            <div
              style={{
                width: "150px",
                height: "100%",
                padding: "auto",
                marginTop: "30px",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/15/Gwalior_1.JPG"
                alt=""
              />
            </div>
            <div className="horizontal-card-body" style={{ width: "100%" }}>
              <div className="orders" style={{ width: "100%" }}>
                <div>
                  <p className="name" style={{ float: "left" }}>
                    challenge name
                  </p>
                </div>
                <div style={{ float: "right" }}>⏱️24 hours 🗺️Gwalior</div>
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
              </div>

              <div className="profile">
                <Button variant="contained" href="#contained-buttons">
                  Start Challenge
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
