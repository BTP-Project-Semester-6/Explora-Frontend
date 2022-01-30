export const getGuideByCityReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_GUIDE_BY_CITY_REQUEST":
      return { loading: true, guide: [] };
    case "GET_GUIDE_BY_CITY_SUCCESS":
      console.log(action.payload);
      return { loading: false, success: true, guide: action.payload.data };
    case "GET_GUIDE_BY_CITY_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
        guide: [],
      };
    default:
      return { loading: false, guide: [] };
  }
};

export const getGuideAndBuddyByCityReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_BUDDY_AND_CITY_BY_CITY_REQUEST":
      return {
        loading: true,
        guide: [],
        buddy: [],
        message: "",
        error: "",
      };
    case "GET_BUDDY_AND_CITY_BY_CITY_SUCCESS":
      console.log(action.payload);
      return {
        loading: false,
        message: "Success",
        error: "",
        success: true,
        guide: action.payload1.data,
        buddy: action.payload2,
      };
    case "GET_BUDDY_AND_CITY_BY_CITY_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
        guide: [],
        buddy: [],
        message: "",
      };
    default:
      return { loading: false, message: "", error: "", guide: [], buddy: [] };
  }
};
