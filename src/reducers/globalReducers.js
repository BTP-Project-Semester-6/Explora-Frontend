import { combineReducers } from "redux";
import sampleChangeTheNumber from "./sampleReducer";
import { getChallengeByCityReducer } from "./challengeReducer";
import { getBuddyByCityReducer } from "./buddyReducer";
const reducers = combineReducers({
  sampleChangeTheNumber,
  getChallengeByCityReducer,
  getBuddyByCityReducer,
});

export default reducers;
