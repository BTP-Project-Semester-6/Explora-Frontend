import { getDistance } from "geolib";
export const getTaskByID = (id, userId) => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_TASK_BY_ID_REQUEST", payload: id });
    fetch(`http://localhost:3001/api/task/getTaskByID`, {
      method: "post",
      body: JSON.stringify({
        userId: userId,
        taskId: id,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Success") {
          console.log(data);
          dispatch({ type: "GET_TASK_BY_ID_SUCCESS", payload: data });
        } else {
          dispatch({ type: "GET_TASK_BY_ID_FAIL", payload: data.message });
        }
      })
      .catch((error) => {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: "GET_TASK_BY_ID_FAIL", payload: message });
      });
  } catch (e) {
    console.log(e);
  }
};

export const addTask = (userId, challengeId) => async (dispatch, getState) => {
  try {
    dispatch({ type: "ADD_TASK_REQUEST", payload: challengeId });

    fetch("http://localhost:3001/api/task/addTask", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        challengeID: challengeId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "ADD_TASK_SUCCESS", payload: data });
        // navigate("/task/" + data.id);
        console.log(data);
      })
      .catch((error) => {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: "ADD_TASK_FAIL", payload: message });
        console.log(error);
      });
  } catch (e) {
    console.log(e);
  }
};

export const validateLocationTask =
  (hostID, task, loc) => async (dispatch, getState) => {
    console.log(task);
    dispatch({
      type: "ADD_SUB_LOCATION_TO_TASK_REQUEST",
      payload: loc,
    });
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   console.log("Latitude is :", position.coords.latitude);
    //   console.log("Longitude is :", position.coords.longitude);
    // });
    const showPosition = (data) => {
      console.log(data.coords.latitude + " " + data.coords.longitude);
      const dis = getDistance(
        { latitude: data.coords.latitude, longitude: data.coords.longitude },
        { latitude: loc.lat, longitude: loc.lng }
      );
      console.log(dis);
      if (dis)
        if (dis < 1000) {
          try {
            fetch("http://localhost:3001/api/task/completeSubLocationInTask", {
              method: "post",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: hostID,
                taskId: task.data._id,
                subLocation: loc.name,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                dispatch({
                  type: "ADD_SUB_LOCATION_TO_TASK_SUCCESS",
                  payload: data,
                });
                console.log(data);
              })
              .catch((error) => {
                const message =
                  error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
                dispatch({
                  type: "ADD_SUB_LOCATION_TO_TASK_FAIL",
                  payload: message,
                });
                console.log(error);
              });
          } catch (e) {
            dispatch({ type: "ADD_SUB_LOCATION_TO_TASK_FAIL", payload: e });
            console.log(e);
          }
        } else {
          console.log(dis);
          dispatch({
            type: "ADD_SUB_LOCATION_TO_TASK_NOT_IN_PLACE",
            payload: { message: "Not in correct place" },
          });
        }
    };

    const showError = (err) => {
      dispatch({ type: "ADD_SUB_LOCATION_TO_TASK_FAIL", payload: err.message });
      console.log(err.message);
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
  };
