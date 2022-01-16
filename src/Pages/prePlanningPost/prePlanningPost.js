import * as React from "react";
import "./prePlanningPost.css";
import Navbar from "../navbar/navbar";
import { useDispatch } from "react-redux";

export default function PrePlanningPost() {
  const [location, setLocation] = React.useState("");
  const [subLocation, setSubLocation] = React.useState("");
  const [description, setDescription] = React.useState("");
  const dispatch = useDispatch();
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (location === "") {
      alert("Please enter location !");
    } else if (subLocation === "") {
      alert("Please enter subLocation !");
    } else if (description === "") {
      alert("Please enter description !");
    } else {
      // dispatch(getCityChallenge(city));
    }
  };
  return (
    <div className="creatBuddy-body">
      <Navbar></Navbar>
      <div style={{ marginTop: "4%" }} className="him">
        <div style={{ width: "60%" }} className="container glass-createBuddy">
          <div className="row"></div>
          <form onSubmit={SubmitHandler}>
            <div class="form-group">
              <label for="formGroupExampleInput2">
                <b>Location</b>
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Location"
                onChange={(e) => setLocation(e.target.value)}
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
                onChange={(e) => setSubLocation(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button
              type="button"
              class="btn btn-primary btn-sm btn-lg btn-block"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
