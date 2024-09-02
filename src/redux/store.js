import { configureStore } from '@reduxjs/toolkit';
import networkReducer from './network-slice/slice';

const store = configureStore({
  reducer: {
    responseSlice: networkReducer,
  },
});

export default store;
