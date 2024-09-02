// slice.js
import { createSlice } from '@reduxjs/toolkit';
import { commonApi } from './api';
// import { openSnackbar } from '../scanckbar-slice/snackbarSlice';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const responseSlice = createSlice({
  name: 'responseSlice',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.data = { ...state.data, ...action.payload };
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetSpecificObj(state, action) {
      const key = action.payload;
      if (key in state.data) {
        state.data[key] = initialState.data[key] || null;
      } else {
        console.warn(`Key "${key}" does not exist in the current state.data`);
      }
    },
    resetAllNetworkResponse(state) {
      state.data = initialState.data;
      state.loading = initialState.loading;
      state.error = initialState.error;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  resetSpecificObj,
  resetAllNetworkResponse,
} = responseSlice.actions;

export const fetchData = (requests) => async (dispatch) => {
  dispatch(fetchDataStart());
  try {
    const responses = await Promise.all(
      requests.map(async (req) => {
        const { url, method, data, token } = req;
        switch (method) {
          case 'GET':
            return await commonApi.get(url, data, token);
          case 'POST':
            if (data instanceof FormData) {
              return await commonApi.postMultipart(url, data);
            } else {
              return await commonApi.post(url, data);
            }
          // case 'POST':
          //   return await commonApi.post(url, data, token);
          case 'PUT':
            return await commonApi.put(url, { ...data, token });
          case 'PATCH':
            return await commonApi.patch(url, { ...data, token });
          case 'DELETE':
            return await commonApi.delete(url, { ...data, token });
          default:
            throw new Error('Unsupported method');
        }
      })
    );

    const dataObject = responses.reduce((acc, response, index) => {
      const { key } = requests[index];
      acc[key] = response; // Assign response to the key 🔑
      return acc;
    }, {});

    dispatch(fetchDataSuccess(dataObject));
  } catch (error) {
    // dispatch(
    //   openSnackbar({
    //     message: error.response.data.clientMessage,
    //     severity: 'error',
    //   })
    // );
    dispatch(fetchDataFailure(error.message));
  }
};

export default responseSlice.reducer;
