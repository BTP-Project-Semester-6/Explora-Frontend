import { combineReducers } from "redux";
import sampleChangeTheNumber from "./sampleReducer";
import { loginReducer } from "./loginReducer";
import {
  getChallengeByCityReducer,
  createChallengeByCityReducer,
  getAllNotValidatedChallengesReducer,
} from "./challengeReducer";
import { getBuddyByCityReducer, createGroupReducer } from "./buddyReducer";
import {
  getGuideByCityReducer,
  getGuideAndBuddyByCityReducer,
} from "./guideReducer";
import { getTaskByUSerIDReducer, addTaskReducer } from "./taskReducer";
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
  createGroupReducer,
  getAllNotValidatedChallengesReducer,
  addTaskReducer,
});

export default reducers;
