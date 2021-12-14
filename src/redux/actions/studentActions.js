import axiosInstance from '../../utils/axiosInstance';
import * as SecureStore from 'expo-secure-store';
import {
  GETUSERS_COURSE,
  GET_ALLCOURSES,
  GET_DOCS,
  GET_PROGRESS,
} from '../actionTypes';

const setDocs = (data) => ({
  type: GET_DOCS,
  payload: data,
});

const setAllCourse = (data) => ({
  type: GET_ALLCOURSES,
  payload: data,
});

const setProgress = (data) => ({
  type: GET_PROGRESS,
  payload: data,
});

const setCourse = (data) => ({
  type: GETUSERS_COURSE,
  payload: data,
});

const getAllCourses = () => {
  return (dispatch) => {
    axiosInstance
      .get('/material/getAllCourses')
      .then((res) => {
        dispatch(setAllCourse(res?.data?.data));
      })
      .catch((err) => {});
  };
};

const getProgress = (data) => {
  return (dispatch) => {
    SecureStore.getItemAsync('jwt').then((token) => {
      axiosInstance
        .get('/progress/get', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setProgress(res.data.data[0]));
        });
    });
  };
};

const getUsersCourse = () => {
  return (dispatch) => {
    SecureStore.getItemAsync('jwt').then((token) => {
      axiosInstance
        .get('/material/getUsersCourses', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setCourse(res.data.data));
        })
        .catch((err) => {});
    });
  };
};

const getDocs = () => {
  return (dispatch) => {
    SecureStore.getItemAsync('jwt').then((token) => {
      axiosInstance
        .get(`/docs2/getUserDocs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setDocs(res.data.data));
        })
        .catch((err) => {});
    });
  };
};

const userActivity = (activityDetails, userName, id) => {
  return (dispatch) => {
    SecureStore.getItemAsync('jwt').then((token) => {
      axiosInstance
        .post(
          `/user-activity/create/${id}`,
          {
            activityDetails: activityDetails,
            createdBy: userName,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {})
        .catch((err) => {});
    });
  };
};

const updateUser = (resetForm, values, activityDetails) => {
  return (dispatch) => {
    SecureStore.getItemAsync('jwt').then((token) => {
      axiosInstance
        .put('/user/update', values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(getUser());
          dispatch(userActivity(activityDetails, userName, id));
          dispatch(
            addNot({
              userId: id,
              userName: userName,
              createdBy: userName,
              activityDetails,
              createdAt: new Date(),
            }),
          );
          resetForm();
        })
        .catch((err) => {});
    });
  };
};

const lastLoggedIn = () => {
  return (dispatch) => {
    SecureStore.getItemAsync('jwt').then((token) => {
      axiosInstance
        .put(
          `/user/lastLoggedIn`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {})
        .catch(() => {});
    });
  };
};

export {
  getDocs,
  userActivity,
  lastLoggedIn,
  updateUser,
  getAllCourses,
  getProgress,
  getUsersCourse,
};
