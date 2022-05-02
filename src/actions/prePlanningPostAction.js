export const createPrePlanning =
  (location, subLocation, author, description) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: "CREATE_PRE_PLANNING_REQUEST", payload: subLocation });
      fetch("http://localhost:3001/api/prePlanning/newPrePlanning", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          location: location,
          subLocation: subLocation,
          author: author,
          description: description,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "CREATE_PRE_PLANNING_SUCCESS", payload: data });
        })
        .catch((error) => {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message;
          dispatch({ type: "CREATE_PRE_PLANNING_FAIL", payload: message });
        });
    } catch (e) {
      console.log(e);
    }
  };

export const getPrePlanningSubLocation =
  (subLoation) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "GET_PRE_PLANNING_SUB_LOCATION_REQUEST",
        payload: subLoation,
      });
      // console.log(city + " action");
      fetch(
        `http://localhost:3001/api/prePlanning/getPrePlanningBySubLocation/${subLoation}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "GET_PRE_PLANNING_SUB_LOCATION_SUCCESS",
            payload: data,
          });
        })
        .catch((error) => {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message;
          dispatch({
            type: "GET_PRE_PLANNING_SUB_LOCATION_FAIL",
            payload: message,
          });
        });
    } catch (e) {
      console.log(e);
    }
  };

export const getAllPrePlanning = (subLoation) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "GET_PRE_PLANNING_SUB_LOCATION_REQUEST",
      payload: subLoation,
    });
    // console.log(city + " action");
    fetch(`http://localhost:3001/api/prePlanning/getAllPrePlanning`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_PRE_PLANNING_SUB_LOCATION_SUCCESS",
          payload: data,
        });
      })
      .catch((error) => {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({
          type: "GET_PRE_PLANNING_SUB_LOCATION_FAIL",
          payload: message,
        });
      });
  } catch (e) {
    console.log(e);
  }
};
