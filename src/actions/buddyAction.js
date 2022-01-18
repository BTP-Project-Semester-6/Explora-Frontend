export const getBuddyByCity = (city) => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_BUDDY_BY_CITY_REQUEST", payload: city });
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

export const createGroup =
  (
    groupMaxSize,
    city,
    dateOfArrival,
    dateOfDeparture,
    description,
    host,
    hostID
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: "CREATE_GROUP_REQUEST", payload: city });
      fetch("http://localhost:3001/api/buddy/createGroup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          groupMaxSize: groupMaxSize,
          city: city,
          dateOfArrival: dateOfArrival,
          dateOfDeparture: dateOfDeparture,
          description: description,
          HostName: host,
          HostId: hostID,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "CREATE_GROUP_SUCCESS", payload: data });
          console.log(data);
        })
        .catch((error) => {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message;
          dispatch({ type: "CREATE_GROUP_FAIL", payload: message });
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };
