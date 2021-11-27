import axiosInstance from '../../utils/axiosInstance';
import * as SecureStore from 'expo-secure-store';
import { GET_DOCS } from '../actionTypes';

const setDocs = (data) => ({
  type: GET_DOCS,
  payload: data,
});

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
          console.log(res);
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

export { getDocs, userActivity, lastLoggedIn, updateUser };
