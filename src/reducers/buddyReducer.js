export const getBuddyByCityReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_BUDDY_BY_CITY_REQUEST":
      return { loading: true, buddy: [] };
    case "GET_BUDDY_BY_CITY_SUCCESS":
      console.log(action.payload);
      return { loading: false, success: true, buddy: action.payload };
    case "GET_BUDDY_BY_CITY_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
        buddy: [],
      };
    default:
      return { loading: false, buddy: [] };
  }
};
export const createGroupReducer = (state = {}, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "CREATE_GROUP_REQUEST":
      return { message: "", error: "", info: "request sent!" };
    case "CREATE_GROUP_SUCCESS":
      return {
        message: action.payload.message,
        error: "",
        info: "",
        success: true,
      };
    case "CREATE_GROUP_FAIL":
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
