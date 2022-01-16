export const addPrePlanning =
  (location, subLocation, description, id) => async (dispatch, getState) => {
    // try {
    //   dispatch({ type: "ADD_PRE_PLANNING_REQUEST", payload: city });
    //   fetch("http://localhost:3001/api/challenge/getChallengeByCity", {
    //     method: "post",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       city: city,
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       dispatch({ type: "GET_CHALLENGE_BY_CITY_SUCCESS", payload: data });
    //     })
    //     .catch((error) => {
    //       const message =
    //         error.response && error.response.data.message
    //           ? error.response.data.message
    //           : error.message;
    //       dispatch({ type: "GET_CHALLENGE_BY_CITY_FAIL", payload: message });
    //     });
    // } catch (e) {
    //   console.log(e);
    // }
  };
