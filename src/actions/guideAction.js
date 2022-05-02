export const getGuideByCity = (city) => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_GUIDE_BY_CITY_REQUEST", payload: city });
    // console.log(city + " action");
    fetch(`http://localhost:3001/api/guide/location/${city}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
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

export const getGuideAndBuddyByCity = (city) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "GET_BUDDY_AND_CITY_BY_CITY_REQUEST",
      payload: city,
    });
    // console.log(city + " action");
    fetch(`http://localhost:3001/api/guide/location/${city}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data1) => {
        try {
          // dispatch({
          //   type: "GET_BUDDY_AND_CITY_BY_CITY_REQUEST",
          //   payload: city,
          // });
          console.log(data1);
          fetch("http://localhost:3001/api/buddy/getBuddyByCity", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
              city: city,
            }),
          })
            .then((res) => res.json())
            .then((data2) => {
              console.log({ guide: data2, buddy: data1 });
              dispatch({
                type: "GET_BUDDY_AND_CITY_BY_CITY_SUCCESS",
                payload1: data1,
                payload2: data2,
              });
            })
            .catch((error) => {
              const message =
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message;
              dispatch({
                type: "GET_BUDDY_AND_CITY_BY_CITY_FAIL",
                payload: message,
              });
            });
        } catch (e) {
          console.log(e);
        }
      })
      .catch((error) => {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: "GET_BUDDY_AND_CITY_BY_CITY_FAIL", payload: message });
      });
  } catch (e) {
    console.log(e);
  }
};

export const getAllGuideAndBuddy = () => async (dispatch, getState) => {
  try {
    const city = "all";
    dispatch({
      type: "GET_BUDDY_AND_CITY_BY_CITY_REQUEST",
      payload: city,
    });
    // console.log(city + " action");

    fetch(`http://localhost:3001/api/guide/getAllGuide`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data1) => {
        try {
          // dispatch({
          //   type: "GET_BUDDY_AND_CITY_BY_CITY_REQUEST",
          //   payload: city,
          // });
          console.log(data1);
          fetch("http://localhost:3001/api/buddy/getAllBuddy", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
              city: city,
            }),
          })
            .then((res) => res.json())
            .then((data2) => {
              console.log({ guide: data2, buddy: data1 });
              dispatch({
                type: "GET_BUDDY_AND_CITY_BY_CITY_SUCCESS",
                payload1: data1,
                payload2: data2,
              });
            })
            .catch((error) => {
              const message =
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message;
              dispatch({
                type: "GET_BUDDY_AND_CITY_BY_CITY_FAIL",
                payload: message,
              });
            });
        } catch (e) {
          console.log(e);
        }
      })
      .catch((error) => {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: "GET_BUDDY_AND_CITY_BY_CITY_FAIL", payload: message });
      });
  } catch (e) {
    console.log(e);
  }
};
