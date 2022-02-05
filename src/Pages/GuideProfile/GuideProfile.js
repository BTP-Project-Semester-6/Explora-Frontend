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
                <h4>{userData.userId.name}</h4>
                <h6>@{userData.userId.username}</h6>
                <div className="subdetail_container">
                  <h3>BASIC DETAILS</h3>
                  <br></br>
                  <h6>Age: {userData.userId.age}</h6>
                  <h6>Gender: {userData.userId.gender}</h6>
                  <h6>Email: {userData.userId.email}</h6>
                  <h6>Instagram: {userData.userId.instagram}</h6>
                  <h6>Telegram: {userData.userId.telegram}</h6>
                  <br></br>
                  <h3>GUIDE INSIGHTS</h3>
                  <br></br>
                  <h6>Location: {userData.location}</h6>
                  <h6>
                    Sublocation: South Bombay, Ghatkopar, Thane, Navi Mumbai
                  </h6>
                  <h6>Guide Rate: {userData.rate}</h6>
                  <h6>Experience: {userData.experience} years</h6>
                  <h6>No. of trips: {userData.pastGuideExperiences.length}</h6>
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
