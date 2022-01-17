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
  const [posts, setPosts] = useState([]);

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
          fetch("http://localhost:3001/api/posts/getpostbyid", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: decoded._id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data.posts);
              setPosts(data.posts);
            })
            .catch((error) => {
              console.log(error);
            });
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
        <div className="row">
          <div className="left-sidebar">
            <LeftSideBar></LeftSideBar>
          </div>
          <div className="post">
            {posts.map((data) => (
              <div>
                <Post {...data} />
              </div>
            ))}
          </div>
          <div className="right-sidebar">
            <RightSideBar></RightSideBar>
          </div>
        </div>
      </div>
    </div>
  );
}
