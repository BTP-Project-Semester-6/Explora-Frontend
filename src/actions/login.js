export const loginAction = (user) => async (dispatch, getState) => {
  //   console.log(user);

  try {
    fetch("http://localhost:3001/api/user/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          console.log(data);
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: data.token,
          });
        } else {
          dispatch({
            type: "LOGIN_FAILED",
            payload: data.error,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
  }
};
