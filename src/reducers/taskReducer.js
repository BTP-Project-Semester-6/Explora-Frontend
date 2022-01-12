export const getTaskByUSerIDReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_TASK_BY_USER_ID_REQUEST":
      return { loading: true, task: [] };
    case "GET_GUIDE_BY_CITY_SUCCESS":
      return { loading: false, success: true, task: action.payload };
    case "GET_GUIDE_BY_CITY_FAIL":
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
