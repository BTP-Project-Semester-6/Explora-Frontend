const initialState = 0;

const sampleChangeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "TESTING":
      return state + action.payload;
    default:
      return state;
  }
};

export default sampleChangeTheNumber;
