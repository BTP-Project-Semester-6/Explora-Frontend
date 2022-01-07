export const getChallengeByCityReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_CHALLENGE_BY_CITY_REQUEST":
      return { state: "request sent" };
    case "GET_CHALLENGE_BY_CITY_SUCCESS":
      console.log(action.payload);
      return { state: "success", success: true, challenges: action.payload };
    case "GET_CHALLENGE_BY_CITY_REQUEST":
      return { state: "error", error: action.payload };
    default:
      return state;
  }
};
