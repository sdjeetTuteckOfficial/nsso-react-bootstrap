import { configureStore } from '@reduxjs/toolkit';
import networkReducer from './network-slice/slice';
import toastReducer from './toast-slice/toastSlice.jsx';

const store = configureStore({
  reducer: {
    responseSlice: networkReducer,
    toast: toastReducer,
  },
});

export default store;
