import * as React from "react";
import "./createChallenge.css";
import Navbar from "../navbar/navbar";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { createCityChallenge } from "../../actions/challengeAction";
import Toast from "../../Components/Toast/toast";
export default function CreateChallenge() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [city, setCity] = React.useState("");
  const [name, setName] = React.useState("");
  const [locations, setLocations] = React.useState([]);
  const [location, setLocation] = React.useState("");
  const [description, setDescription] = React.useState("");

  const result = useSelector((state) => state.createChallengeByCityReducer);
  const addLocationHandler = (e) => {
    e.preventDefault();

    fetch(process.env.REACT_APP_GET_COORDINATES + location)
      .then((response) => response.json())
      .then((result) => {
        if (
          result.data[0].latitude == undefined ||
          result.data[0].longitude == undefined
        ) {
          console.log(result.data[0]);
          Toast(
            "",
            "",
            "",
            "Some error occured in adding location, please try again"
          );
        } else {
          setLocations((locations) => [
            ...locations,
            {
              lat: result.data[0].latitude,
              lng: result.data[0].longitude,
              name: location.toLocaleLowerCase(),
            },
          ]);
          Toast("Location added", "", "", "");
          setLocation("");
        }
      });
  };
  console.log(locations);
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (locations === []) {
      Toast("", "", "", "Please enter locations!");
    } else if (city === "") {
      Toast("", "", "", "Please enter city!");
    } else if (description === "") {
      Toast("", "", "", "Please enter description!");
    } else {
      dispatch(
        createCityChallenge(
          city.toLocaleLowerCase(),
          locations,
          description,
          name
        )
      );
      navigate("/challenge");
      // console.log(result);
    }
  };

  // Toast(result.message, result.error, result.info, "");
  // console.log(result.message + result.error + result.message);

  return (
    <div className="creatBuddy-body">
      <div style={{ paddingTop: "4%" }} className="him">
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
              <ul>
                {locations.map((loc) => (
                  <li>{loc.name}</li>
                ))}
              </ul>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Ad Location"
                value={location}
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
