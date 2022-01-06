export const getChallengeByCityReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_CHALLENGE_BY_CITY_REQUEST":
      return [];
    case "GET_CHALLENGE_BY_CITY_SUCCESS":
      console.log(action.payload);
      return action.payload;
    case "GET_CHALLENGE_BY_CITY_REQUEST":
      return action.payload;
    default:
      return [];
  }
};
