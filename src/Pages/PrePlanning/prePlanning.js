import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import "./prePlanning.scss";
import Toast from "../../Components/Toast/toast";
import { getPrePlanningSubLocation } from "../../actions/prePlanningPostAction";
import AddIcon from "@material-ui/icons/Add";
import SPINNER from "../../img/Spinner.gif";

export default function PrePlanning() {
  const dispatch = useDispatch();

  const [subLocation, setsubLocation] = useState("");
  const prePlannings = useSelector(
    (state) => state.getPrePlanningBySubLocationReducer
  );
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (subLocation === "") {
      Toast("", "", "", "Please enter sub-location!");
    } else {
      dispatch(getPrePlanningSubLocation(subLocation.toLocaleLowerCase()));
    }
  };
  // Toast(prePlannings.message, prePlannings.error, "", "");
  // console.log(prePlannings);
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
                "Please enter location inside city you want to seach🔍."
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
                <p className="order">{prePlanningItem.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
