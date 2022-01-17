export const getChallengeByCityReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_CHALLENGE_BY_CITY_REQUEST":
      return [];
    case "GET_CHALLENGE_BY_CITY_SUCCESS":
      console.log(action.payload);
      return action.payload;
    case "GET_CHALLENGE_BY_CITY_FAIL":
      return action.payload;
    default:
      return [];
  }
};
export const createChallengeByCityReducer = (state = {}, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_CHALLENGE_BY_CITY_REQUEST":
      return { message: "", error: "", info: "request sent!" };
    case "ADD_CHALLENGE_BY_CITY_SUCCESS":
      return {
        message: action.payload.message,
        error: "",
        info: "",
        success: true,
      };
    case "ADD_CHALLENGE_BY_CITY_FAIL":
      return {
        message: "",
        error: action.payload,
        info: "",
        success: false,
      };
    default:
      return { message: "", error: "", info: "" };
  }
};
