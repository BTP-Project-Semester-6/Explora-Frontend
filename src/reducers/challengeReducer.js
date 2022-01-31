import Toast from "../Components/Toast/toast";

export const getChallengeByCityReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_CHALLENGE_BY_CITY_REQUEST":
      Toast("", "", "Request Sent", "");
      return [];
    case "GET_CHALLENGE_BY_CITY_SUCCESS":
      Toast("Success", "", "", "");
      if (action.payload.length == 0) {
        Toast(
          "",
          "",
          "",
          "We currently dont have any pre planning on this location"
        );
      }
      console.log(action.payload);
      return action.payload;
    case "GET_CHALLENGE_BY_CITY_FAIL":
      Toast("", action.payload, "", "");
      return action.payload;
    default:
      return [];
  }
};
export const createChallengeByCityReducer = (state = {}, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_CHALLENGE_BY_CITY_REQUEST":
      Toast("", "", "Request Sent", "");
      return { message: "", error: "", info: "request sent!" };
    case "ADD_CHALLENGE_BY_CITY_SUCCESS":
      Toast("Success", "", "", "");
      return {
        message: action.payload.message,
        error: "",
        info: "",
        success: true,
      };
    case "ADD_CHALLENGE_BY_CITY_FAIL":
      Toast("", action.payload, "", "");
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
