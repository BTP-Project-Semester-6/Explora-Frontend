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
import crownimg from "../leftSidebar/Crowen.png";
import React, { useState, useEffect } from "react";

import jwt_decode from "jwt-decode";

function LeftSideBar() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    } else if (localStorage.getItem("token") != "null") {
      const decoded = jwt_decode(localStorage.getItem("token"));
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        if (decoded) {
          // setUser(decoded);
          fetch("http://localhost:3001/api/user/getAllUsers", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
              id: decoded._id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data.users);
              // setPosts(data.allPosts.reverse());
              data.users.map((user) => {
                let like = 0;
                let comment = 0;
                user.posts.map((post) => {
                  like += post.postId.likes.length;
                  comment += post.postId.comments.length;
                });

                let count = like + comment + user.badges;
                user.count = count;
              });
              data.users.sort((a, b) => {
                return b.count - a.count;
              });
              console.log(data.users);

              setUsers(data.users);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    } else {
      navigate("/login");
    }
  }, []);
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
        </div>

        <div
          style={{
            marginTop: "40px",
            marginLeft: "10px",
            marginRight: "10px",
            textAlign: "center",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "20px",
            padding: "20px",
            background: "white",
          }}
        >
          <div className="LeaderboardTx">Explora Rank</div>
          <div>
            <div className="Crowen col">
              <img className="CrowenImg row" src={`${crownimg}`} alt="" />

              <img
                className="RankOneImg row"
                style={{ margin: "0px" }}
                src={users[0] == null ? "#" : `${users[0].picUrl}`}
                alt=""
              />

              <div>{users[0] == null ? "#" : users[0].name}</div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="RankTwo">
                  <img
                    className="RankTwoImg"
                    src={users[1] == null ? "#" : `${users[1].picUrl}`}
                    alt=""
                  />
                  <div>{users[1] == null ? "#" : users[1].name}</div>
                </div>
              </div>
              <div className="col-6">
                <div className="RankThree">
                  <img
                    className="RankThreeImg"
                    src={users[2] == null ? "#" : `${users[2].picUrl}`}
                    alt=""
                  />
                  <div>{users[2] == null ? "#" : users[2].name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSideBar;
