import * as React from "react";
import "./createBuddy.css";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import Navbar from "../Pages/navbar/navbar";

import { styled } from "@mui/system";
export default function CreatBuddy() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const myStyle = {
    backgroundImage: "url(/buddy.jpg)",
    height: "100vh",

    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div style={myStyle} className="creatBuddy-body">
      <Navbar></Navbar>
      <div className="him">
        <div style={{ width: "60%" }} className="container glass">
          <div className="row">
            <div style={{ width: "20%" }} class="form-group">
              <label for="formGroupExampleInput2">
                <b>Members</b>{" "}
              </label>
              <input
                type="number"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Members"
              />
            </div>
            <div style={{ width: "60%" }} class="form-group">
              <label for="formGroupExampleInput2">
                <b>Add Members</b>
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="AddMembers"
              />
            </div>
            <div style={{ marginTop: "24px", width: "20%" }}>
              <button type="button" class="btn btn-outline-dark">
                {" "}
                <b>Add</b>
              </button>
            </div>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">
              <b>City</b>
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="City"
            />
          </div>
          <div className="row">
            <div style={{ width: "50%" }} class="form-group">
              <label for="formGroupExampleInput2">
                <b>Date of Journey</b>
              </label>
              <input
                type="date"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Date"
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
            ></textarea>
          </div>
          <div style={{ fontSize: "18px", marginTop: "10px" }}>
            {" "}
            Current Members :-<b> Nalin, Prerit, Joshi</b>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
