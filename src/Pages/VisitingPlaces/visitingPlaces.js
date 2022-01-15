import React, { useEffect } from "react";
import "./visitingPlaces.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Navbar from "../../Components/Navbar/navbar";
import { toast } from "react-toastify";

export const VisitingPlaces = () => {
  const [age, setAge] = React.useState("coffee;mall;monuments;garden;");
  const [placed, setPlaced] = React.useState([]);

  const handleChange = (event) => {
    setAge(event.target.value + ";").then(() => {
      ApiCall();
    });
  };

  function ApiCall() {
    try {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        fetch("http://localhost:3001/api/visit/places", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            location: lat + "," + long,
            keywords: age,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.name === "Error") {
              toast.error("Daily Limit Reached");
            } else {
              setPlaced(data.suggestedLocations);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    ApiCall();
  }, []);

  function CardPlace(props) {
    return (
      <div class="card">
        <div class="bg"></div>
        <div class="content">
          <h1 class="heading">{props.data.id}</h1>
          <p class="info">
            <b>
              {props.data.placeName} {props.data.distance + "m"}
            </b>
            <br />
            {props.data.placeAddress}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* <Navbar /> */}
      <div
        style={{
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <div style={{ background: "white" }}>
          <div className="twelve" style={{ transform: "translateX(-2%)" }}>
            <h1>VISITING PARADICE</h1>
          </div>{" "}
          <br />
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Filter
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Filter"
            >
              <MenuItem value={"Coffee;"}>Food Court</MenuItem>
              <MenuItem value={"Monuments;"}>Monuments</MenuItem>
              <MenuItem value={"Mall;"}>Mall</MenuItem>
              <MenuItem value={"Garder;"}>Garden </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ margin: "40px" }}>
          <div className="bodyPlace">
            {placed.map((data, id) => {
              data.num = id;
              <CardPlace data={data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
