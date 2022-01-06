import { combineReducers } from "redux";
import sampleChangeTheNumber from "./sampleReducer";
import { getChallengeByCityReducer } from "./challengeReducer";
import { getBuddyByCityReducer } from "./buddyReducer";
import { getGuideByCityReducer } from "./guideReducer";
const reducers = combineReducers({
  sampleChangeTheNumber,
  getChallengeByCityReducer,
  getBuddyByCityReducer,
  getGuideByCityReducer,
});

export default reducers;
