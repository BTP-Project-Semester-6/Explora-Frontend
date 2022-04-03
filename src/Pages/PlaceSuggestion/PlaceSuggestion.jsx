import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
  PlaceSuggestionContent,
  PlaceSuggestionPage,
  PlaceCard,
  PlaceImage,
  ImageData,
} from "./PlaceSuggestion.styles";
import { Grid } from "@mui/material";
import Toast from "../../Components/Toast/toast.js";

const PlaceSuggestion = () => {
  const [suggestedData, setSuggestedData] = useState([]);

  const navigate = useNavigate();

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
        fetch("http://localhost:3001/api/user/suggestplaces", {
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
            console.log(result);
            if (result.errors) {
              Toast("", "Something went wrong!", "", "");
              navigate("/home");
            } else {
              Toast("Successfully fetched places!", "", "", "");
              setSuggestedData(result.rankedParticipants);
            }
          });
      }
    }
  }, []);

  return (
    <PlaceSuggestionPage>
      <PlaceSuggestionContent>
        <h2>EXPLORE PLACES SIMILAR TO YOUR INTEREST</h2>
        <p>
          Seems to be like you've given the personality quiz...Great! We've
          ranked all the places in the decreasing order of similarity with your
          personality. It means that places which appear higher in this list are
          our top picks for you.
        </p>
        <h3>RANKLIST</h3>
        <Grid container>
          {suggestedData.length === 0 && <p>Loading...</p>}
          {suggestedData.map((user) => {
            return user.userData.posts.map((post) => {
              const postData = post.postId;
              return (
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <PlaceCard>
                    <PlaceImage src={postData.photoUrl} />
                    <ImageData>
                      <h4>{postData.location}</h4>
                      <p>
                        Travelled by {user.userData.name} (@
                        {user.userData.username}) who has{" "}
                        <b>{user.similarity.toFixed(2)}% similarity</b> wth you.
                      </p>
                    </ImageData>
                  </PlaceCard>
                </Grid>
              );
            });
          })}
        </Grid>
      </PlaceSuggestionContent>
    </PlaceSuggestionPage>
  );
};

export default PlaceSuggestion;
