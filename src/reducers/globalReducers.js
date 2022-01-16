import { combineReducers } from "redux";
import sampleChangeTheNumber from "./sampleReducer";
import { loginReducer } from "./loginReducer";
import {
  getChallengeByCityReducer,
  createChallengeByCityReducer,
} from "./challengeReducer";
import { getBuddyByCityReducer } from "./buddyReducer";
import {
  getGuideByCityReducer,
  getGuideAndBuddyByCityReducer,
} from "./guideReducer";
import { getTaskByUSerIDReducer } from "./taskReducer";
import {
  createPrePlanningReducer,
  getPrePlanningBySubLocationReducer,
} from "./prePlanningReducer";
const reducers = combineReducers({
  sampleChangeTheNumber,
  loginReducer,
  getChallengeByCityReducer,
  getBuddyByCityReducer,
  getGuideByCityReducer,
  getGuideAndBuddyByCityReducer,
  getTaskByUSerIDReducer,
  createChallengeByCityReducer,
  createPrePlanningReducer,
  getPrePlanningBySubLocationReducer,
});

export default reducers;
