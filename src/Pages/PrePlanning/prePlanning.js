import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import "./prePlanning.scss";
import Toast from "../../Components/Toast/toast";
import {
  getPrePlanningSubLocation,
  getAllPrePlanning,
} from "../../actions/prePlanningPostAction";
import AddIcon from "@material-ui/icons/Add";
import SPINNER from "../../img/Spinner.gif";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function PrePlanning() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [subLocation, setsubLocation] = useState("");
  const [helpful, setHelpful] = useState(false);
  const [notHelpful, setNotHelpful] = useState(false);
  const [host, setHost] = useState("");
  const [hostID, setHostID] = useState("");

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
          console.log("DECODED");
          console.log(decoded);
          setHostID(decoded._id);
          setHost(decoded.username);
          dispatch(getAllPrePlanning());
        }
      }
    } else {
      navigate("/login");
    }
  }, []);

  const prePlannings = useSelector(
    (state) => state.getPrePlanningBySubLocationReducer
  );

  const handleHelpful = (item) => {
    console.log(item);
    if (!item.helpful.some((i) => i.userId === hostID)) {
      fetch("http://localhost:3001/api/prePlanning/helpfulPrePlanning", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          postId: item._id,
          userId: jwt_decode(localStorage.getItem("token"))._id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(getPrePlanningSubLocation(subLocation.toLocaleLowerCase()));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      fetch("http://localhost:3001/api/prePlanning/removeHelpfulPrePlanning", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          postId: item._id,
          userId: jwt_decode(localStorage.getItem("token"))._id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(getPrePlanningSubLocation(subLocation.toLocaleLowerCase()));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleNotHelpful = (item) => {
    if (!item.notHelpful.some((i) => i.userId === hostID)) {
      fetch("http://localhost:3001/api/prePlanning/notHelpfulPrePlanning", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          postId: item._id,
          userId: jwt_decode(localStorage.getItem("token"))._id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(getPrePlanningSubLocation(subLocation.toLocaleLowerCase()));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      fetch(
        "http://localhost:3001/api/prePlanning/removeNotHelpfulPrePlanning",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            postId: item._id,
            userId: jwt_decode(localStorage.getItem("token"))._id,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(getPrePlanningSubLocation(subLocation.toLocaleLowerCase()));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (subLocation === "") {
      Toast("", "", "", "Please enter sub-location!");
    } else {
      dispatch(getPrePlanningSubLocation(subLocation.toLocaleLowerCase()));
    }
  };

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
            value={subLocation}
            placeholder="Sub-Location (e.g.: Red Fort)"
            inputProps={{ "aria-label": "search google maps" }}
            style={{ textTransform: "lowercase" }}
            onChange={(e) => setsubLocation(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton type="button" href="/prePlanningPost">
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
          <h1>PRE-PLANNING</h1>
        </div>
        {prePlannings.prePlanning.length ? (
          <div></div>
        ) : (
          <div
            style={{
              margin: "auto",
              marginTop: "20%",
            }}
          >
            <p style={{ textAlign: "center" }}>
              {prePlannings.loading === true ? (
                <img src={SPINNER} width="80px" height="80px" />
              ) : (
                "Sorry, no pre-planning available for this place.😔"
              )}
            </p>
          </div>
        )}
        {prePlannings.prePlanning.map((prePlanningItem) => (
          <div className="horizontal-card">
            <div
              style={{
                width: "150px",
                height: "100%",
                padding: "auto",
                marginTop: "30px",
              }}
            >
              <img src={prePlanningItem.author.picUrl} alt="" />
            </div>
            <div className="horizontal-card-body" style={{ width: "100%" }}>
              <div className="orders" style={{ width: "100%" }}>
                <div>
                  <p className="name" style={{ float: "left" }}>
                    {prePlanningItem.author.username}
                  </p>
                </div>
                <div style={{ float: "right" }}>
                  ⌚{prePlanningItem.date.substr(0, 10)}
                </div>
              </div>
              <div>
                <p className="order">
                  <i style={{ color: "grey" }}>
                    Location:{" "}
                    {prePlanningItem.subLocation +
                      "," +
                      prePlanningItem.location}
                  </i>
                  <br />
                  {prePlanningItem.description}
                </p>
                <IconButton>
                  {prePlanningItem.helpful.some(
                    (item) => item.userId === hostID
                  ) ? (
                    <ThumbUpIcon
                      onClick={(e) => handleHelpful(prePlanningItem)}
                      style={{ color: "green" }}
                    />
                  ) : (
                    <ThumbUpIcon
                      onClick={(e) => handleHelpful(prePlanningItem)}
                    />
                  )}
                  {prePlanningItem.helpful.length}
                </IconButton>
                <IconButton>
                  {prePlanningItem.notHelpful.some(
                    (item) => item.userId === hostID
                  ) ? (
                    <ThumbDownIcon
                      onClick={(e) => handleNotHelpful(prePlanningItem)}
                      style={{ color: "red" }}
                    />
                  ) : (
                    <ThumbDownIcon
                      onClick={(e) => handleNotHelpful(prePlanningItem)}
                    />
                  )}
                  {prePlanningItem.notHelpful.length}
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
