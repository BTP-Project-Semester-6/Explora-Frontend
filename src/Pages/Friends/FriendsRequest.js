import React, { useState, useEffect } from "react";
import "./Friends.scss";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import Toast from "../../Components/Toast/toast";

export const FriendRequests = () => {
  const [allUser, setAllUser] = useState([]);
  const [user, setUser] = useState({});
  const [searchName, setSearchName] = useState("");
  const [alignment, setAlignment] = React.useState("Requests");
  const [store, setStore] = useState({});
  const [fC, setFC] = useState(new Set());
  const [fR, setFR] = useState(new Set());
  const [fS, setFS] = useState(new Set());

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    if (newAlignment === "Requests") {
      setAllUser(store.reqRecieved);
    } else {
      setAllUser(store.friends);
    }
  };

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
          fetch("http://localhost:3001/api/user/getMyFriends", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: decoded._id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              setStore(data);
              setAllUser(data.reqRecieved);
              data.friends.forEach((element) => {
                setFC((prev) => new Set(prev.add(element.friendId._id)));
              });
              data.reqRecieved.forEach((element) => {
                setFR((prev) => new Set(prev.add(element.friendId._id)));
              });
              data.reqSent.forEach((element) => {
                setFS((prev) => new Set(prev.add(element.friendId._id)));
              });
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

  const SearchingHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/user/searchFriends", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: searchName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllUser(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  const AcceptRequestHandler = (fromId) => {
    fetch("http://localhost:3001/api/user/friendRequestAccept", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fromId: user._id,
        toId: fromId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Toast("Accepted", "", "", "");
        sleep(1000).then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ProfileCard = (props) => {
    return (
      <div>
        <div>
          <div class="card card-one">
            <header>
              <div class="avatar">
                <img src={props.friendId.picUrl} alt="Jhon Doe" />
              </div>
            </header>

            <h3>
              <b>{props.friendId.name}</b>
            </h3>
            <div class="desc">
              <b>
                {props.friendId.friends.length} Friends |{" "}
                {props.friendId.badges.length} Badges |{" "}
                {props.friendId.posts.length} Posts
              </b>
            </div>
            <div class="contacts">
              <a href={"https://www.instagram.com/" + props.friendId.instagram}>
                <InstagramIcon
                  style={{ fontSize: "30px", marginRight: "-3px" }}
                />
              </a>
              <a href={"mailto:" + props.friendId.email}>
                <MailIcon style={{ fontSize: "30px" }} />
              </a>
              <a href={"https://t.me/" + props.friendId.telegram}>
                <TelegramIcon
                  style={{ fontSize: "30px", marginLeft: "-10px" }}
                />
              </a>
              <div class="clear"></div>
            </div>

            <footer>
              {props.friendId._id == user._id ? (
                <div>Strange! You Found Yourself</div>
              ) : (
                <div>
                  {fC.has(props.friendId._id) && (
                    <Button
                      variant="contained"
                      endIcon={<CheckCircleIcon />}
                      style={{ background: "#fff", color: "#5573d0" }}
                      disabled
                    >
                      Friends
                    </Button>
                  )}
                  {fR.has(props.friendId._id) && (
                    <Button
                      variant="contained"
                      endIcon={<ReplyAllIcon />}
                      style={{ background: "#fff", color: "#5573d0" }}
                      onClick={(e) => AcceptRequestHandler(props.friendId._id)}
                    >
                      Accept Request
                    </Button>
                  )}
                  {fS.has(props.friendId._id) && (
                    <Button
                      variant="contained"
                      endIcon={<TrackChangesIcon />}
                      style={{ background: "#fff", color: "#5573d0" }}
                      disabled
                    >
                      Request Sent
                    </Button>
                  )}
                  {!fC.has(props.friendId._id) &&
                    !fR.has(props.friendId._id) &&
                    !fS.has(props.friendId._id) && (
                      <Button
                        variant="contained"
                        endIcon={<PersonAddIcon />}
                        style={{ background: "#fff", color: "#5573d0" }}
                      >
                        Friend Request
                      </Button>
                    )}
                </div>
              )}
            </footer>
          </div>

          <div class="clear"></div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton
            value="Friends"
            style={{ fontSize: "15px", color: "blue" }}
          >
            Friends
          </ToggleButton>
          <ToggleButton
            value="Requests"
            style={{ fontSize: "15px", color: "orange" }}
          >
            Requests
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div
        className="bodyPlace"
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          overflowY: "auto",
          height: "600px",
          //   boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        {allUser.map((data) => {
          return <ProfileCard {...data} />;
        })}
        {allUser.length == 0 && <div> List Is Empty </div>}
      </div>
    </div>
  );
};
