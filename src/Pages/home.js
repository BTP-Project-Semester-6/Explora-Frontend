import "./home.css";
import LeftSideBar from "./leftSidebar/leftSidebar";
import Post from "./Post/post";
import RightSideBar from "./RightSidebar/rightSideBar";
import Navbar from "./navbar/navbar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function Home() {
  const [user, setUser] = useState({});

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
          console.log("DECODED");
          console.log(decoded);
          setUser(decoded);
        }
      }
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div className="home-body">
        <Navbar></Navbar>
        {/* {user.name} */}
        <div className="row">
          <div className="left-sidebar">
            <LeftSideBar></LeftSideBar>
          </div>
          <div className="post">
            <Post></Post>
            <Post></Post>
            <Post></Post>
          </div>
          <div className="right-sidebar">
            <RightSideBar></RightSideBar>
          </div>
        </div>
      </div>
    </div>
  );
}
