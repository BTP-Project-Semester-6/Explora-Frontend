export const getBuddyByCity = (city) => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_CHALLENGE_BY_CITY_REQUEST", payload: city });
    // console.log(city + " action");
    fetch("http://localhost:3001/api/buddy/getBuddyByCity", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        city: city,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "GET_BUDDY_BY_CITY_SUCCESS", payload: data });
      })
      .catch((error) => {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: "GET_BUDDY_BY_CITY_FAIL", payload: message });
      });
  } catch (e) {
    console.log(e);
  }
};
