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
