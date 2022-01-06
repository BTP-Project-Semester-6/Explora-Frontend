export const getGuideByCity = (city) => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_GUIDE_BY_CITY_REQUEST", payload: city });
    // console.log(city + " action");
    fetch(`http://localhost:3001/api/guide/location/${city}`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "GET_GUIDE_BY_CITY_SUCCESS", payload: data });
      })
      .catch((error) => {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: "GET_GUIDE_BY_CITY_FAIL", payload: message });
      });
  } catch (e) {
    console.log(e);
  }
};
