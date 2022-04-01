import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./feedback.scss";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";

export const Feedback = () => {
  const [user, setUser] = useState({});
  const [value, setValue] = React.useState(0);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
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
          setUser(decoded);
        }
      }
    } else {
      navigate("/login");
    }
  }, []);

  function submitHandler(e) {
    e.preventDefault();
    console.log(value, subject, description);
    fetch("http://localhost:3001/api/user/feedback", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        subject,
        description,
        rating: value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Feedback Recieved! Thank You For Your Valuable Time");
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div class="bodyFeed">
      <div class="containerFeed">
        <div class="form-container">
          <div class="left-container">
            <div class="left-inner-container">
              <h1>Feedback</h1>
              <p></p>
              <br />
              <h4>
                Feel free to give your honest feedback. We Appriciate your
                privacy.
              </h4>
            </div>
          </div>
          <div class="right-container" style={{ marginTop: "10%" }}>
            <div class="right-inner-container">
              <form action="#" onSubmit={(e) => submitHandler(e)}>
                <input
                  type="text"
                  placeholder="Subject"
                  style={{ height: "60px" }}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  rows="4"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <Rating
                  name="no-value"
                  value={value}
                  size="large"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  style={{ fontSize: "30px", marginBottom: "20%" }}
                />
                <br />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
