import "./rightSideBar.css";
import Task from "../task/task";
import Suggestion from "../showFriend/suggestion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

function RightSideBar() {
  const navigate = useNavigate();
  const [task, setTask] = useState([]);

  //HOOKS FOR FRIEND SUGGESTION
  const [suggestState, setSuggestState] = useState("Loading...");
  const [rankList, setRankList] = useState([]);

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
          fetch(`http://localhost:3001/api/task/getStatusTask/${decoded._id}`, {
            method: "get",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": localStorage.getItem("token"),
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setTask(data);
            })
            .catch((error) => {
              console.log(error);
            });

          fetch("http://localhost:3001/api/user/suggestfriends", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
              id: decoded._id,
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result.rankedParticipants);
              if (result.errors) {
                setSuggestState(
                  "Seems to be like you haven't given the personality quiz...Complete the personality quiz in order to explore friends similar to you!"
                );
              } else {
                setSuggestState("");
                setRankList(result.rankedParticipants);
              }
            });
        }
      }
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <div>
        <div className="right-box">
          <div
            // className="left-up"
            style={{
              margin: "10px",
              textAlign: "center",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "20px",
              background: "white",
            }}
          >
            <div
              className="heading-sug"
              style={{ fontSize: "20px", paddingTop: "20px" }}
            >
              <b>Tasks</b>
            </div>
            <div
              className="leftfriends"
              style={{
                margin: "10px",
                overflowY: "auto",
                height: "230px",
              }}
            >
              {task.map((data) => (
                <Task data={data}></Task>
              ))}
            </div>
          </div>
          {/* <hr style={{ margin: "10px" }}></hr> */}
          <div
            style={{
              margin: "10px",
              marginTop: "50px",
              textAlign: "center",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "20px",
              padding: "20px",
              background: "white",
            }}
          >
            <div className="heading-sug" style={{ fontSize: "20px" }}>
              <b>Suggestions</b>
            </div>

            <div
              className="leftfriends"
              style={{
                paddingTop: "10px",
                paddingBottom: "20px",
                overflowY: "auto",
                height: "318px",
              }}
            >
              <h4>{suggestState}</h4>
              {rankList.map((user) => {
                return (
                  <Suggestion
                    similarity={user.similarity}
                    name={user.userData.name}
                    username={user.userData.username}
                    pic={user.userData.picUrl}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightSideBar;
