import React, { useEffect } from "react";
import "./visitingPlaces.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Navbar from "../../Components/Navbar/navbar";
import { toast } from "react-toastify";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const VisitingPlaces = () => {
  const [age, setAge] = React.useState("coffee;mall;monuments;garden;");
  const [placed, setPlaced] = React.useState([]);

  async function handleChange(event) {
    setAge(event.target.value);
    ApiCall(event.target.value);
  }

  function ApiCall(place) {
    try {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        fetch("http://localhost:3001/api/visit/places", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            location: lat + "," + long,
            keywords: place,
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
    ApiCall("coffee;mall;monuments;garden;");
  }, []);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  function CardPlace(props) {
    return (
      <Box sx={{ minWidth: 375, margin: "10px" }}>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Popular Destination #{props.id}
              </Typography>
              <Typography variant="h5" component="div">
                {props.data.placeName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.data.distance + "m"}
              </Typography>
              <Typography variant="body2">{props.data.placeAddress}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </React.Fragment>
        </Card>
      </Box>
    );
  }

  return (
    <div>
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
              <MenuItem value={"Garden;"}>Garden </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{}}>
          <div className="bodyPlace">
            {placed.map((data, id) => (
              <div>
                <CardPlace data={data} id={id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
