import { combineReducers } from "redux";
import appActions from "./reducers/appReducers";
import { authReducer } from "./reducers/authReducer";
import { studentReducer } from "./reducers/studentReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  student: studentReducer,
  app: appActions,
});

export default rootReducer;
