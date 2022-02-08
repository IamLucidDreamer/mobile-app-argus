import {
  GETUSERS_COURSE,
  GET_ALLCOURSES,
  GET_DOCS,
  GET_PROGRESS,
  GET_STUDENT_CLASS,
} from "../actionTypes";

const initialState = {
  docs: [],
  course: [],
  courses: [],
  progress: null,
  studentClass: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOCS:
      return {
        ...state,
        docs: action.payload,
      };
    case GET_ALLCOURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case GET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    case GETUSERS_COURSE:
      return {
        ...state,
        course: action.payload,
      };
    case GET_STUDENT_CLASS:
      return {
        ...state,
        studentClass: action.payload,
      };
    default:
      return state;
  }
};

export { studentReducer };
