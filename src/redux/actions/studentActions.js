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
          dispatch(setDocs(res.data.data));
        })
        .catch((err) => {});
    });
  };
};

export { getDocs };
