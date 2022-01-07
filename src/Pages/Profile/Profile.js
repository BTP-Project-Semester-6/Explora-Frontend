import "./Profile.scss";
import profile_bg from "../../img/profile-bg.jpg";
import person from "../../img/person.jpg";
import Grid from "@mui/material/Grid";
import Post from "../Post/post";

const Profile = () => {
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
                <h3>STATS</h3>
                <br></br>
                <h6>289 Friends</h6>
                <h6>3 Challenges Completed</h6>
                <h6>24 Places Travelled</h6>
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
    </div>
  );
};

export default Profile;
