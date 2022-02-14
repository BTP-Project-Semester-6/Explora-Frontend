import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getCityChallenge } from "../../actions/challengeAction";
import AddIcon from "@material-ui/icons/Add";
import "./challenge.scss";

export default function Challenge() {
  const dispatch = useDispatch();

  const [city, setCity] = useState("");
  const challenges = useSelector((state) => state.getChallengeByCityReducer);

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (city === "") {
      alert("Please enter city!");
    } else {
      dispatch(getCityChallenge(city.toLocaleLowerCase()));
    }
  };

  const StartChallengeHandler = (challenge) => {};

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
            inputProps={{ "aria-label": "search google maps" }}
            style={{ textTransform: "lowercase" }}
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton type="button" href="/createChallenge">
            <AddIcon />
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
        {challenges.length ? (
          <div></div>
        ) : (
          <div
            style={{
              margin: "auto",
              marginTop: "20%",
            }}
          >
            <p style={{ textAlign: "center" }}>
              {"Please enter location you want to seach🔍."}
            </p>
          </div>
        )}
        {challenges.map((challengeItem) =>
          challengeItem.isvalid ? (
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
                      <li>
                        📌
                        <a
                          href={
                            "https://maps.google.com?q=" +
                            location.lat +
                            "," +
                            location.lng
                          }
                          target="_blank"
                        >
                          {location.name}
                        </a>{" "}
                      </li>
                    ))}
                  </ul>
                  <p className="order">{challengeItem.description}</p>
                </div>

                <div className="profile">
                  <Button
                    variant="contained"
                    onClick={(e) => StartChallengeHandler(challengeItem)}
                  >
                    Start Challenge
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
}
