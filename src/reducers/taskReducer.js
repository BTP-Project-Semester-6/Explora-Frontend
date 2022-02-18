import Toast from "../Components/Toast/toast";

export const getTaskByUSerIDReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_TASK_BY_ID_REQUEST":
      return { loading: true, task: {} };
    case "GET_TASK_BY_ID_SUCCESS":
      return { loading: false, success: true, task: action.payload };
    case "GET_TASK_BY_ID_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
        task: {},
      };
    default:
      return { loading: false, task: {} };
  }
};

export const addTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK_REQUEST":
      Toast("", "", "Request Sent", "");
      return { loading: true, task: [] };
    case "ADD_TASK_SUCCESS":
      Toast("Challenge Activation Success", "", "", "");
      return { loading: false, success: true, task: action.payload };
    case "ADD_TASK_FAIL":
      Toast("", "Challenge Activation Fail", "", "");
      return {
        loading: false,
        success: false,
        error: action.payload,
        task: [],
      };
    default:
      return { loading: false, task: [] };
  }
};

export const verifySubLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SUB_LOCATION_TO_TASK_REQUEST":
      Toast("", "", "Verfying...", "");
      return { loading: true, task: [] };
    case "ADD_SUB_LOCATION_TO_TASK_SUCCESS":
      Toast("Congratulations you completed another step!", "", "", "");
      return { loading: false, success: true, task: action.payload };
    case "ADD_SUB_LOCATION_TO_TASK_NOT_IN_PLACE":
      Toast("", "", "", "You are not in correct place!");
      return { loading: false, success: true, task: action.payload };
    case "ADD_SUB_LOCATION_TO_TASK_FAIL":
      Toast("", "Something Went Wrong", "", "");
      return {
        loading: false,
        success: false,
        error: action.payload,
        task: [],
      };
    default:
      return { loading: false, task: [] };
  }
};
