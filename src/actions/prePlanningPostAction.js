export const createPrePlanning =
  (location, subLocation, author, description) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: "CREATE_PRE_PLANNING_REQUEST", payload: sublocation });
      fetch("http://localhost:3001/api/prePlanning/newPrePlanning", {
        method: "post",
        headers: { "Content-Type": "application/json" },
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
