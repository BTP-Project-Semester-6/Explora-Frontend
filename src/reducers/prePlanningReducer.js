export const createPrePlanningReducer = (state = {}, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "CREATE_PRE_PLANNING_REQUEST":
      return { message: "", error: "", info: "request sent!" };
    case "CREATE_PRE_PLANNING_SUCCESS":
      return {
        message: action.payload.message,
        error: "",
        info: "",
        success: true,
      };
    case "CREATE_PRE_PLANNING_FAIL":
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
