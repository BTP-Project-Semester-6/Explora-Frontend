import { compose } from "redux";

export const getTaskByID = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_TASK_BY_USER_ID_REQUEST", payload: id });
    fetch(`http://localhost:3001/api/task/getTaskByID/${id}`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "GET_TASK_BY_USER_ID_SUCCESS", payload: data });
      })
      .catch((error) => {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: "GET_TASK_BY_USER_ID_FAIL", payload: message });
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
