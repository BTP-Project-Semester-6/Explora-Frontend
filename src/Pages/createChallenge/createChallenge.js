import * as React from "react";
import "./createChallenge.css";
import Navbar from "../navbar/navbar";

import { styled } from "@mui/system";
export default function CreateChallenge() {
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
              <b>City</b>
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="City"
            />
          </div>
          <div>
            <div class="form-group">
              <label for="formGroupExampleInput2">
                <b>Locations</b>
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="AddMembers"
              />
            </div>
            <div style={{ width: "15%" }}>
              <button type="button" class="btn btn-primary">
                {" "}
                <b>Add Location</b>
              </button>
            </div>
          </div>
          <div style={{ marginTop: "24px" }} class="form-group">
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
            Create Challenge
          </button>
        </div>
      </div>
    </div>
  );
}
