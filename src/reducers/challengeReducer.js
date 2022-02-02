import Toast from "../Components/Toast/toast";

export const getChallengeByCityReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_CHALLENGE_BY_CITY_REQUEST":
      Toast("", "", "Request Sent", "");
      return [];
    case "GET_CHALLENGE_BY_CITY_SUCCESS":
      if (action.payload.length == 0) {
        Toast(
          "",
          "",
          "",
          "We currently dont have any challenges on this location"
        );
      } else {
        Toast("Success", "", "", "");
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

export const getAllNotValidatedChallengesReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_NOT_VALIDATED_REQUEST":
      Toast("", "", "Request Sent", "");
      return { challenges: [], loading: true, success: false };
    case "GET_ALL_NOT_VALIDATED_SUCCESS":
      if (action.payload.length == 0) {
        Toast("", "", "", "No currently not validated challenges.");
      } else {
        Toast("Success", "", "", "");
      }
      console.log(action.payload);
      return { challenges: action.payload, loading: false, success: true };
    case "GET_ALL_NOT_VALIDATED_FAIL":
      Toast("", action.payload, "", "");
      return { challenges: [], loading: false, success: false };
    default:
      return { challenges: [], loading: false, success: false };
  }
};
