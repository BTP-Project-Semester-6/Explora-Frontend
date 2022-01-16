import * as React from "react";
import "./createChallenge.css";
import Navbar from "../navbar/navbar";

import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { createCityChallenge } from "../../actions/challengeAction";
export default function CreateChallenge() {
  const dispatch = useDispatch();

  const [city, setCity] = React.useState("");
  const [name, setName] = React.useState("");
  const [locations, setLocations] = React.useState([]);
  const [location, setLocation] = React.useState("");
  const [description, setDescription] = React.useState("");

  const result = useSelector((state) => state.createChallengeByCityReducer);
  console.log(result);
  const addLocationHandler = (e) => {
    e.preventDefault();
    const loc = location.replace(/ /g, "+");
    const url =
      "http://api.positionstack.com/v1/forward?access_key=17f205afe4cdd599e9805bd1b7c6a7f5&query=" +
      location;
    // console.log(locations);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setLocations((locations) => [
          ...locations,
          {
            lat: result.data[0].latitude,
            lng: result.data[0].longitude,
            name: location.toLocaleLowerCase(),
          },
        ]);
        setLocation("");
        // console.log(locations);
      });
    // console.log(locations);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(locations);
    console.log(city);
    console.log(description);
    if (locations === []) {
      alert("Please enter locations!");
    } else if (city === "") {
      alert("Please enter city!");
    } else if (description === "") {
      alert("Please enter description!");
    } else {
      dispatch(createCityChallenge(city, locations, description, name));
    }
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
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">
              <b>Name</b>
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Name of Badge"
              onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div style={{ width: "15%" }}>
              <button
                type="button"
                class="btn btn-primary"
                onClick={addLocationHandler}
              >
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
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="button"
            class="btn btn-primary btn-sm btn-lg btn-block"
            onClick={SubmitHandler}
          >
            Create Challenge
          </button>
        </div>
      </div>
    </div>
  );
}
