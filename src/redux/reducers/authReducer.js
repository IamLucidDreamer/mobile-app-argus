import { IS_AUTH, SET_ID, SET_TOKEN, SET_USER } from '../actionTypes';

const initialState = {
  user: {},
  token: null,
  id: null,
  isAuth: 'loading',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    case IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};

export { authReducer };
