import "./GuideProfile.scss";
import profile_bg from "../../img/profile-bg.jpg";
import person from "../../img/person.jpg";
import Grid from "@mui/material/Grid";
import ReviewCard from "./ReviewCard/ReviewCard";

const GuideProfile = () => {
  return (
    <div className="profile_page">
      <div className="all_profile_content">
        <img src={profile_bg} className="bg_img"></img>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={4} className="basic_detail">
            <div className="img_container">
              <img src={person} className="profile_pic" />
            </div>
            <div className="detail_container">
              <h4>Vijay Joshi</h4>
              <h6>@tourholic</h6>
              <div className="subdetail_container">
                <h3>BASIC DETAILS</h3>
                <br></br>
                <h6>Age: 19</h6>
                <h6>Gender: Male</h6>
                <h6>Email: joshivijay324@gmail.com</h6>
                <h6>Instagram: vijayjoshi802</h6>
                <h6>Telegram: MysteryCoder</h6>
                <br></br>
                <h3>GUIDE INSIGHTS</h3>
                <br></br>
                <h6>Location: Mumbai</h6>
                <h6>
                  Sublocation: South Bombay, Ghatkopar, Thane, Navi Mumbai
                </h6>
                <h6>Guide Rate: ₹1000/hr</h6>
                <h6>Experience: 6 years</h6>
                <h6>No. of trips: 85</h6>
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
    </div>
  );
};

export default GuideProfile;
