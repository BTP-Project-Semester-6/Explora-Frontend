import { combineReducers } from "redux";
import sampleChangeTheNumber from "./sampleReducer";
import { loginReducer } from "./loginReducer";
import { getChallengeByCityReducer } from "./challengeReducer";

const reducers = combineReducers({
  sampleChangeTheNumber,
  loginReducer,
  getChallengeByCityReducer,
});

export default reducers;
