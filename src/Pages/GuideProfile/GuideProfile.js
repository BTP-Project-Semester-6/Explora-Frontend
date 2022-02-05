import "./GuideProfile.scss";
import profile_bg from "../../img/profile-bg.jpg";
import person from "../../img/person.jpg";
import Grid from "@mui/material/Grid";
import ReviewCard from "./ReviewCard/ReviewCard";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Toast from "../../Components/Toast/toast";
import { useEffect, useState } from "react";

const GuideProfile = () => {
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
        console.log(window.location.pathname.slice(14));
        const userId = window.location.pathname.slice(14);
        fetch("http://localhost:3001/api/guide/id/" + userId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.error === undefined) {
              setUserData(result.data);
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
                <img src={userData.userId.picUrl} className="profile_pic" />
              </div>
              <div className="detail_container">
                <h3>{userData.userId.name}</h3>
                <h5>@{userData.userId.username}</h5>
                <div className="subdetail_container">
                  <h2>BASIC DETAILS</h2>
                  <br></br>
                  <h5>Age: {userData.userId.age}</h5>
                  <h5>Gender: {userData.userId.gender}</h5>
                  <h5>Email: {userData.userId.email}</h5>
                  <h5>Instagram: {userData.userId.instagram}</h5>
                  <h5>Telegram: {userData.userId.telegram}</h5>
                  <br></br>
                  <h2>GUIDE INSIGHTS</h2>
                  <br></br>
                  <h5>Location: {userData.location}</h5>
                  <h5>
                    Sublocation: South Bombay, Ghatkopar, Thane, Navi Mumbai
                  </h5>
                  <h5>Guide Rate: {userData.rate}</h5>
                  <h5>Experience: {userData.experience} years</h5>
                  <h5>No. of trips: {userData.pastGuideExperiences.length}</h5>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={8} lg={8} className="grid_content">
              <h3 className="post_heading">REVIEWS</h3>
              <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} className="post_grid">
                  <ReviewCard />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className="post_grid">
                  <ReviewCard />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className="post_grid">
                  <ReviewCard />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className="post_grid">
                  <ReviewCard />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className="post_grid">
                  <ReviewCard />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className="post_grid">
                  <ReviewCard />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default GuideProfile;
