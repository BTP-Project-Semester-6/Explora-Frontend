import { useState } from "react";
import {
  FriendCard,
  FriendDetails,
  FriendIntro,
  FriendSuggestionContent,
  FriendSuggestionPage,
  ImageContainer,
  SendRequestButton,
  UserImage,
} from "./FriendSuggestions.styles.js";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Grid } from "@mui/material";
import Toast from "../../Components/Toast/toast.js";

const FriendSuggestion = () => {
  const [rankList, setRankList] = useState([]);

  const navigate = useNavigate();

  useState(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    } else {
      const decoded = jwt_decode(localStorage.getItem("token"));
      console.log(decoded);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
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
            if (result.errors) {
              Toast("", "Something went wrong!", "", "");
              navigate("/home");
            } else {
              Toast("Successfully fetched ranklist", "", "", "");
              setRankList(result.rankedParticipants);
            }
          });
      }
    }
  }, []);

  return (
    <FriendSuggestionPage>
      <FriendSuggestionContent>
        <h2>EXPLORE NEW FRIENDS</h2>
        <p>
          Seems to be like you've given the personality quiz...Great! We've
          fetched a list of most people most similar to your personal interests
          who are the most probable candidates of being your friend
        </p>
        <h3>RANKLIST</h3>
        <Grid container>
          {rankList.length == 0 && <h3>Loading...</h3>}
          {rankList.map((user) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <FriendCard>
                  <UserImage src={user.userData.picUrl} />
                  <p>{user.userData.name}</p>
                  <p>@{user.userData.username}</p>
                  <FriendDetails>
                    <p>{user.userData.travelHistory.length} places travelled</p>
                    <p>Age: {user.userData.age}</p>
                    <p>
                      <b>Similarity: {user.similarity.toFixed(2)}%</b>
                    </p>
                  </FriendDetails>
                  <SendRequestButton>Send Friend Request</SendRequestButton>
                </FriendCard>
              </Grid>
            );
          })}
        </Grid>
      </FriendSuggestionContent>
    </FriendSuggestionPage>
  );
};

export default FriendSuggestion;
