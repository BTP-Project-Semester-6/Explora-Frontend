import "./Profile.scss";
import profile_bg from "../../img/profile-bg.jpg";
import person from "../../img/person.jpg";
import Grid from "@mui/material/Grid";
import Post from "../Post/post";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const Profile = (props) => {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState({
    friends: [],
    travelHistory: [],
    badges: [],
  });

  const navigate = useNavigate();
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
          setUser(decoded);
          fetch("http://localhost:3001/api/posts/getpostbyid", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              setPosts(data.posts);
              console.log(data.posts);
            })
            .catch((error) => {
              console.log(error);
            });
          fetch(`http://localhost:3001/api/user/id/${id}`, {
            method: "get",
            headers: { "Content-Type": "application/json" },
          })
            .then((res) => res.json())
            .then((data) => {
              setProfile(data.user);
              console.log(data.user);
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
    <div className="profile_page">
      <div className="all_profile_content">
        <img src={profile_bg} className="bg_img"></img>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={4} className="basic_detail">
            <div className="img_container">
              <img src={profile.picUrl} className="profile_pic" />
            </div>
            <div className="detail_container">
              <h4>{profile.name}</h4>
              <h6>@{profile.username}</h6>
              <div className="subdetail_container">
                <h3>BASIC DETAILS</h3>
                <br></br>
                <h6>Age: {profile.age}</h6>
                <h6>Gender: {profile.gender}</h6>
                <h6>Email: {profile.email}</h6>
                <h6>Instagram: -NAN-</h6>
                <h6>Telegram: -NAN-</h6>
                <br></br>
                <h3>STATS</h3>
                <br></br>
                <h6>{profile.friends.length} Friends</h6>
                <h6>{profile.badges.length} Challenges Completed</h6>
                <h6>{profile.travelHistory.length} Places Travelled</h6>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={8} className="grid_content">
            <h3 className="post_heading">POSTS</h3>
            <Grid container>
              {/* <Grid item xs={12} sm={12} md={6} lg={6} className="post_grid">
                <Post />
              </Grid> */}

              <div className="bodyPlace">
                {posts
                  .sort((a, b) => Date(a.created_at) - Date(b.created_at))
                  .map((data) => (
                    <div>
                      <Post {...data} style={{ width: "1000px" }} />
                    </div>
                  ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Profile;