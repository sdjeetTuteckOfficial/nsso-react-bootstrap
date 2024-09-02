import { createSlice } from '@reduxjs/toolkit';

export const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    show: false,
    message: '',
    variant: 'success',
  },
  reducers: {
    showToast: (state, action) => {
      state.show = true;
      state.message = action.payload.message;
      state.variant = action.payload.variant || 'success';
    },
    hideToast: (state) => {
      state.show = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;

export default toastSlice.reducer;
