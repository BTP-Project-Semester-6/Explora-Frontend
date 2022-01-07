import { combineReducers } from "redux";
import sampleChangeTheNumber from "./sampleReducer";
import { getChallengeByCityReducer } from "./challengeReducer";
import { getBuddyByCityReducer } from "./buddyReducer";
import {
  getGuideByCityReducer,
  getGuideAndBuddyByCityReducer,
} from "./guideReducer";
const reducers = combineReducers({
  sampleChangeTheNumber,
  getChallengeByCityReducer,
  getBuddyByCityReducer,
  getGuideByCityReducer,
  getGuideAndBuddyByCityReducer,
});

export default reducers;
