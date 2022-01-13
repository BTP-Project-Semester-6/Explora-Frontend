import * as React from "react";
import "./prePlanningPost.css";
import Navbar from "../navbar/navbar";

import { styled } from "@mui/system";
export default function PrePlanningPost() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="creatBuddy-body">
      <Navbar></Navbar>
      <div style={{ marginTop: "4%" }} className="him">
        <div style={{ width: "60%" }} className="container glass-createBuddy">
          <div className="row"></div>
          <div class="form-group">
            <label for="formGroupExampleInput2">
              <b>Location</b>
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Location"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">
              <b>Sub-Location</b>
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Sub-Location"
            />
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
          <button type="button" class="btn btn-primary btn-sm btn-lg btn-block">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
