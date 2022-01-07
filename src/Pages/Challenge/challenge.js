import React, { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getCityChallenge } from "../../actions/challengeAction";
import "./challenge.scss";
import Navbar from "../navbar/navbar";

export default function Challenge() {
  const dispatch = useDispatch();

  const [city, setCity] = useState("");
  const [challenges, setChallenges] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (city === "") {
      alert("Please enter city!");
    } else {
      dispatch(getCityChallenge(city));
      // const challengeList = useSelector(
      //   (state) => state.getChallengeByCityReducer
      // );
      // setChallenges(challengeList.challenges);
    }
  };

  // console.log(challengeList);
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
          onSubmit={submitHandler}
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
          <h1>CHALLENGES</h1>
        </div>
        {challenges.map((challengeItem) => (
          <div className="horizontal-card">
            <div
              style={{
                width: "150px",
                height: "100%",
                padding: "auto",
                marginTop: "30px",
              }}
            >
              <img src={challengeItem.badge} alt="" />
            </div>
            <div className="horizontal-card-body" style={{ width: "100%" }}>
              <div className="orders" style={{ width: "100%" }}>
                <div>
                  <p className="name" style={{ float: "left" }}>
                    {challengeItem.name}
                  </p>
                </div>
                <div style={{ float: "right" }}>{challengeItem.city}</div>
              </div>
              <div>
                <ul style={{ listStyle: "none" }}>
                  {challengeItem.locations.map((location) => (
                    <li>📌 {location.name}</li>
                  ))}
                </ul>
                <p className="order">{challengeItem.description}</p>
              </div>

              <div className="profile">
                <Button variant="contained" href="#contained-buttons">
                  Start Challenge
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
