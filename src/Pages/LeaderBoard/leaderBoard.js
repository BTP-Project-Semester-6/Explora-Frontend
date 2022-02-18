import "./leaderBoard.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import rankone from "../LeaderBoard/one.png";
import steps from "../LeaderBoard/podium.png";

const LeaderBoard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
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
          // setUser(decoded);
          fetch("http://localhost:3001/api/user/getAllUsers", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: decoded._id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data.users);
              // setPosts(data.allPosts.reverse());
              data.users.map((user) => {
                let like = 0;
                let comment = 0;
                user.posts.map((post) => {
                  like += post.postId.likes.length;
                  comment += post.postId.comments.length;
                });

                let count = like + comment + user.badges;
                user.count = count;
              });
              data.users.sort((a, b) => {
                return b.count - a.count;
              });
              console.log(data.users);

              setUsers(data.users);
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
    <div className="container">
      <div className="row">
        <div className="brandimgbox col-2">
          <img className="brandimg " src={`${steps}`} alt="" srcset="" />
        </div>
        <div className="lbbrand col-10">Explora Rank</div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-4">
          <div className="wcar">
            <div className="wrankbadge">
              <img className="wbadge" src={`${rankone}`} />
            </div>
            <div className="wpoints"></div>
            <div className="wimgbox">
              <img className="wimg" src={`${users[0].picUrl}`} alt="" />
            </div>
            <div className="row">
              <div className=" rankCard col-2">
                <div className="score">Score</div>
                <div className="wrank">{users[0].count}</div>
              </div>

              <div className="winfo col-7">
                <div className="wname ">{users[0].name}</div>
                <div className="wusername ">{users[0].username}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          {users.map((user, index) => (
            <div className="lbusers row ">
              <div className="lbuserrank col-1">{index + 1}</div>
              <div className="lbuserimgbox col-2">
                <img className="lbuserimg" src={`${user.picUrl}`}></img>
              </div>
              <div className="lbnamebox col-6">
                <div className="lbusername">{user.username}</div>
                <div className="lbname">{user.name}</div>
              </div>
              <div className="lbuserpoints col-3">{user.count}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
