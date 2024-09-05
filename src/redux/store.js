import { configureStore } from '@reduxjs/toolkit';
import networkReducer from './network-slice/slice';
import toastReducer from './toast-slice/toastSlice.jsx';
import formReducer from './form-slice/formSlice.js';

const store = configureStore({
  reducer: {
    responseSlice: networkReducer,
    toast: toastReducer,
    form_data: formReducer,
  },
});

export default store;
