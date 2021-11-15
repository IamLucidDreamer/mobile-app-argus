import { GET_DOCS } from '../actionTypes';

const initialState = {
  docs: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOCS:
      return {
        ...state,
        docs: action.payload,
      };
    default:
      return state;
  }
};

export { studentReducer };
