import { compose } from "redux";

export const getTaskByUserID = (userID) => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_TASK_BY_USER_ID_REQUEST", payload: userID });
    fetch(`http://localhost:3001/api/task/getStatusTask/${userID}`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json)
      .then((data) => {
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
