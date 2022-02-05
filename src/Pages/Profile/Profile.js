import "./Profile.scss";
import profile_bg from "../../img/profile-bg.jpg";
import Grid from "@mui/material/Grid";
import Post from "../Post/post";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Toast from "../../Components/Toast/toast";

const Profile = () => {
  const [userData, setUserData] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    } else {
      const decoded = jwt_decode(localStorage.getItem("token"));
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.log(decoded);
        console.log(window.location.pathname.slice(9));
        const userId = window.location.pathname.slice(9);
        fetch("http://localhost:3001/api/user/id/" + userId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.error === undefined) {
              setUserData(result.user);
            } else {
              Toast("", "Couldn't find th given user", "", "");
              navigate("/login");
            }
          });
      }
    }
  }, []);

  return (
    <div className="profile_page">
      {userData !== undefined && (
        <div className="all_profile_content">
          <img src={profile_bg} className="bg_img"></img>
          <Grid container>
            <Grid item xs={12} sm={6} md={4} lg={4} className="basic_detail">
              <div className="img_container">
                <img src={userData.picUrl} className="profile_pic" />
              </div>
              <div className="detail_container">
                <h3>{userData.name}</h3>
                <h5>@{userData.username}</h5>
                <div className="subdetail_container">
                  <h2>BASIC DETAILS</h2>
                  <br></br>
                  <h5>Age: {userData.age}</h5>
                  <h5>Gender: {userData.gender}</h5>
                  <h5>Email: {userData.email}</h5>
                  <h5>Instagram: {userData.instagram}</h5>
                  <h5>Telegram: {userData.telegram}</h5>
                  <br></br>
                  <h2>STATS</h2>
                  <br></br>
                  <h5>{userData.friends.length} Friends</h5>
                  <h5>{userData.badges.length} Challenges Completed</h5>
                  <h5>{userData.travelHistory.length} Places Travelled</h5>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={8} lg={8} className="grid_content">
              <h3 className="post_heading">POSTS</h3>
              <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} className="post_grid">
                  <Post />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className="post_grid">
                  <Post />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className="post_grid">
                  <Post />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className="post_grid">
                  <Post />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className="post_grid">
                  <Post />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className="post_grid">
                  <Post />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Profile;
