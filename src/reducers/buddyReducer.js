export const getBuddyByCityReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_BUDDY_BY_CITY_REQUEST":
      return { loading: true, buddy: [] };
    case "GET_BUDDY_BY_CITY_SUCCESS":
      console.log(action.payload);
      return { loading: false, success: true, buddy: action.payload };
    case "GET_BUDDY_BY_CITY_FAIL":
      return { loading: false, success: false, buddy: [] };
    default:
      return { loading: false, buddy: [] };
  }
};
