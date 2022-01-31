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
import AddIcon from "@material-ui/icons/Add";
import SPINNER from "../../img/Spinner.gif";
import "./buddy.scss";
import { getGuideAndBuddyByCity } from "../../actions/guideAction";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../Components/Toast/toast";

export default function Buddy() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const { buddy } = useSelector((state) => state.getGuideAndBuddyByCityReducer);
  const { guide } = useSelector((state) => state.getGuideAndBuddyByCityReducer);
  const result = useSelector((state) => state.getGuideAndBuddyByCityReducer);

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (city === "") {
      Toast("", "", "", "Please enter city!!");
    } else {
      dispatch(getGuideAndBuddyByCity(city.toLowerCase()));
      setCity("");
    }
  };

  // Toast(result.message, result.error, "", "");

  return (
    <div
      className="buddy-body"
      style={{
        width: "100%",
        height: "100vh",
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
            value={city}
            inputProps={{ "aria-label": "search google maps" }}
            style={{ textTransform: "lowercase" }}
            onChange={(e) => setCity(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton type="button" href="/createBuddy">
            <AddIcon />
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
          {guide.map((eachGuide) => (
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
                  image={eachGuide.userId.picUrl}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {eachGuide.userId.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rate: <b>{eachGuide.rate}</b>
                    <br />
                    Experience:<b>{eachGuide.experience} Years</b>
                    <br />
                    Sub Locations:<b></b>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={"/profile/" + eachGuide.userId.guideId}
                  >
                    VIEW PROFILE
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
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
          {buddy.length ? (
            <div></div>
          ) : (
            <div
              style={{
                margin: "auto",
                marginTop: "20%",
              }}
            >
              <p style={{ textAlign: "center" }}>
                {result.loading === true ? (
                  <img src={SPINNER} width="80px" height="80px" />
                ) : (
                  "Please enter city you want to seach🔍."
                )}
              </p>
            </div>
          )}
          {buddy.map((eachBuddy) => (
            <div className="horizontal-card">
              <div className="horizontal-card-body" style={{ width: "100%" }}>
                <div className="orders" style={{ width: "100%" }}>
                  <div>
                    <p className="name" style={{ float: "left" }}>
                      <a
                        style={{ textDecoration: "none", color: "#3f51b5" }}
                        href={"/profile/" + eachBuddy.Host._id}
                      >
                        {eachBuddy.Host.name}
                      </a>{" "}
                      ({eachBuddy.dateOfArrival} {" to "}
                      {eachBuddy.dateOfDeparture})
                    </p>
                  </div>
                  <div style={{ float: "right" }}>
                    👨‍👨‍👦‍👦{eachBuddy.groupMaxSize}Buddies 🗺️{eachBuddy.city}
                  </div>
                </div>
                <div>
                  <p className="order">{eachBuddy.description}</p>
                  <p
                    style={{
                      backgroundColor: "#D4D4D4",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <b>Buddies</b>
                    <br />

                    {eachBuddy.inGroup.map((groupMember) => (
                      <i>
                        {" "}
                        <a
                          style={{ color: "#DD4AB", cursor: "pointer" }}
                          href={"/profile/" + groupMember._id}
                        >
                          {groupMember.username}
                        </a>
                        {" ,"}
                      </i>
                    ))}
                  </p>
                </div>

                <div className="profile">
                  <Button variant="contained" href="#contained-buttons">
                    Join Group
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
