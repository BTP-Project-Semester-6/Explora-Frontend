import Axios from "axios";

export const getAllChallenge = () => async (dispatch, getState) => {};

export const getCityChallenge = (city) => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_CHALLENGE_BY_CITY_REQUEST", payload: city });
    // console.log(city + " action");
    fetch("http://localhost:3001/api/challenge/getChallengeByCity", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        city: city,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "GET_CHALLENGE_BY_CITY_SUCCESS", payload: data });
      })
      .catch((error) => {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: "GET_CHALLENGE_BY_CITY_FAIL", payload: message });
      });
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  } catch (e) {
    console.log(e);
  }
};
