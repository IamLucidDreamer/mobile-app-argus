import { combineReducers } from 'redux';
import { authReducer } from './reducers/authReducer';
import { studentReducer } from './reducers/studentReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  student: studentReducer,
});

export default rootReducer;
