import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Grid } from "@mui/material";
import "./MyBuddies.scss";

const MyBuddies = () => {
  const [loading, setLoading] = useState(true);
  const [buddies, setBuddies] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(undefined);

  const navigate = useNavigate();

  const addMemberHandler = (id, username, grpId, buddyIndex, reqIndex) => {
    console.log(id, username, grpId);
    fetch("http://localhost:3001/api/buddy/addBuddy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id: id,
        username: username,
        groupId: grpId,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const buddiesList = buddies;
        buddiesList[buddyIndex].requests.splice(reqIndex, 1);
        buddiesList[buddyIndex].inGroup.push({
          id: id,
          username: username,
        });
        console.log(buddiesList);
        setBuddies([]);
        setBuddies(buddiesList);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    } else {
      const decoded = jwt_decode(localStorage.getItem("token"));
      console.log(decoded);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        setCurrentUserId(decoded._id);
        //main logic here
        fetch("http://localhost:3001/api/buddy/userbuddies/" + decoded._id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setLoading(false);
            if (result.message === "Ok") {
              setBuddies(result.buddies);
            }
          });
      }
    }
  }, []);

  const BuddyList = (props) => {
    console.log(props);
    return (
      <div>
        {props.buddiesArray.length} buddies available
        {props.buddiesArray.map((buddy, ind) => {
          console.log(buddy);
          return (
            <div className="buddy_card">
              <Grid container>
                <Grid item xs={12} sm={6} md={8} lg={8} className="buddy_intro">
                  {buddy.Host.name} ( {buddy.dateOfArrival} -{" "}
                  {buddy.dateOfDeparture} )
                </Grid>
                <Grid
                  item
                  xs={0}
                  sm={6}
                  md={4}
                  lg={4}
                  className="buddy_location"
                >
                  👨‍👨‍👦‍👦 {buddy.inGroup.length} buddies 🗺️ {buddy.city}
                </Grid>
              </Grid>
              <p className="buddy_description">{buddy.description}</p>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  style={{ marginBottom: "10px" }}
                >
                  Buddies
                  <br></br>
                  {buddy.inGroup.map((member) => {
                    return (
                      <a
                        className="buddy_member"
                        href={"/profile/" + member.id}
                        style={{ display: "block" }}
                      >
                        {member.username}
                      </a>
                    );
                  })}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  Requests
                  {buddy.requests.map((request, reqInd) => {
                    return (
                      <Grid container className="buddy_member">
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                          <a href={"/profile/" + request.id}>
                            {request.username}
                          </a>
                          <br>node</br>
                          <a>Similarity: {request.similarity}</a>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={6}
                          md={6}
                          lg={6}
                          className="request_grid"
                        >
                          {currentUserId === buddy.Host._id && (
                            <button
                              className="add_member_button"
                              onClick={() => {
                                addMemberHandler(
                                  request.id,
                                  request.username,
                                  buddy._id,
                                  ind,
                                  reqInd
                                );
                              }}
                            >
                              Add Member
                            </button>
                          )}
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="my_buddies">
      <h1>MY BUDDIES</h1>
      <p>Here's a list of buddy groups you are a part of</p>
      {loading && <h3>Loading...</h3>}
      <BuddyList buddiesArray={buddies} />
    </div>
  );
};

export default MyBuddies;
