import * as React from "react";
import "./createBuddy.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import Navbar from "../Pages/navbar/navbar";

import { styled } from "@mui/system";
import { DatePicker } from "@mui/lab";
import Toast from "../Components/Toast/toast";
import { useDispatch, useSelector } from "react-redux";
import { createGroup } from "../actions/buddyAction";
export default function CreatBuddy() {
  const [groupMaxSize, setGroupMaxSize] = useState(1);
  const [city, setCity] = useState("");
  const [dateOfArrival, setDateOfArrival] = useState(new Date());
  const [dateOfDeparture, setDateOfDeparture] = useState(new Date());
  const [description, setDescription] = useState("");
  const [host, setHost] = useState("");
  const [hostID, setHostID] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const result = useSelector((state) => state.createGroupReducer);
  console.log(result);
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
        }
      }
    } else {
      navigate("/login");
    }
  }, []);

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (hostID == "" || host == "") {
      Toast("", "Please login to continue..", "", "");
    } else if (
      groupMaxSize &&
      city &&
      dateOfArrival &&
      dateOfDeparture &&
      description
    ) {
      Toast("", "", "Request Sent", "");
      dispatch(
        createGroup(
          groupMaxSize,
          city,
          dateOfArrival,
          dateOfDeparture,
          description,
          hostID,
          hostID
        )
      );
    } else {
      Toast("", "", "", "Please fill all details");
    }
  };

  const myStyle = {
    backgroundImage: "url(/buddy.jpg)",
    height: "100vh",

    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  Toast(result.message, result.error, "", "");
  return (
    <div className="creatBuddy-body">
      <div style={{ paddingTop: "4%" }} className="him">
        <div style={{ width: "60%" }} className="container glass-createBuddy">
          <form onSubmit={SubmitHandler}>
            <div style={{ width: "100%", margin: "auto" }} className="row">
              <div style={{ width: "20%" }} class="form-group">
                <label for="formGroupExampleInput2">
                  <b>Total Members</b>{" "}
                </label>
                <input
                  type="number"
                  value={groupMaxSize}
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Members"
                  onChange={(e) => setGroupMaxSize(e.target.value)}
                />
              </div>
              {/* <div style={{ width: "60%" }} class="form-group">
              <label for="formGroupExampleInput2">
                <b>Add Members</b>
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="AddMembers"
              />
            </div> */}
              <div style={{ marginTop: "24px", width: "20%" }}>
                {/* <button type="button" class="btn btn-outline-dark">
                {" "}
                <b>Add</b>
              </button> */}
              </div>
            </div>
            <div style={{ width: "98%", margin: "auto" }} class="form-group">
              <label for="formGroupExampleInput2">
                <b>City</b>
              </label>
              <input
                type="text"
                value={city}
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div style={{ margin: "auto", marginTop: "24px" }} className="row">
              <div style={{ width: "50%" }} class="form-group">
                <label for="formGroupExampleInput2">
                  <b>Date of Journey</b>
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Date"
                  value={dateOfDeparture}
                  onChange={(e) => setDateOfDeparture(e.target.value)}
                />
              </div>
              <div style={{ width: "50%" }} class="form-group">
                <label for="formGroupExampleInput2">
                  <b>Date of Coming Back</b>
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Date"
                  value={dateOfArrival}
                  onChange={(e) => setDateOfArrival(e.target.value)}
                />
              </div>
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">
                {" "}
                <b>Discription </b>
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div style={{ fontSize: "18px", marginTop: "10px" }}>
              {" "}
              {/* Current Members :-<b> Nalin, Prerit, Joshi</b>{" "} */}
            </div>
            <button class="btn btn-primary btn-sm btn-lg btn-block">
              Create Group
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
