export const loginReducer = (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { state: action.payload };
    case "LOGIN_FAILED":
      return { state: "null" };
    default:
      return { state: "null" };
  }
};
