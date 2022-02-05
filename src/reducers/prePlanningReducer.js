import Toast from "../Components/Toast/toast";

export const createPrePlanningReducer = (state = {}, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "CREATE_PRE_PLANNING_REQUEST":
      Toast("", "", "Request Sent", "");
      return { message: "", error: "", loading: true, info: "request sent!" };
    case "CREATE_PRE_PLANNING_SUCCESS":
      Toast("Success", "", "", "");
      return {
        message: action.payload.message,
        error: "",
        info: "",
        success: true,
        loading: false,
      };

    case "CREATE_PRE_PLANNING_FAIL":
      Toast("", action.payload, "", "");
      return {
        message: "",
        error: action.payload,
        info: "",
        success: false,
        loading: false,
      };
    default:
      return { message: "", error: "", info: "", loading: false };
  }
};

export const getPrePlanningBySubLocationReducer = (state = {}, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "GET_PRE_PLANNING_SUB_LOCATION_REQUEST":
      Toast("", "", "Searching... ", "");
      return {
        message: "",
        error: "",
        info: "request sent!",
        prePlanning: [],
        loading: true,
      };
    case "GET_PRE_PLANNING_SUB_LOCATION_SUCCESS":
      // console.log(action.payload);
      if (action.payload.length == 0) {
        Toast(
          "",
          "",
          "",
          "We currently dont have any challenges in this location"
        );
      } else {
        Toast("Success", "", "", "");
      }
      return {
        message: "Success",
        error: "",
        info: "",
        success: true,
        loading: false,
        prePlanning: action.payload,
      };
    case "GET_PRE_PLANNING_SUB_LOCATION_FAIL":
      Toast("", action.payload, "", "");
      return {
        message: "",
        error: action.payload,
        info: "",
        success: false,
        prePlanning: [],
        loading: false,
      };
    default:
      return {
        message: "",
        error: "",
        info: "",
        prePlanning: [],
        loading: false,
      };
  }
};
