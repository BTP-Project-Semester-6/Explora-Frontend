import { combineReducers } from "redux";
import sampleChangeTheNumber from "./sampleReducer";
import { getChallengeByCityReducer } from "./challengeReducer";

const reducers = combineReducers({
  sampleChangeTheNumber,
  getChallengeByCityReducer,
});

export default reducers;
