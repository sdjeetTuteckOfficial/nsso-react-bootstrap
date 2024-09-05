import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sections: {},
};

const dataSlice = createSlice({
  name: 'form_data',
  initialState,
  reducers: {
    setSectionData: (state, action) => {
      const { section_id, data } = action.payload;
      state.sections[section_id] = { ...state.sections[section_id], ...data };
    },
    initializeSection: (state, action) => {
      const { section_id, data } = action.payload;
      state.sections[section_id] = data;
    },
    clearSection: (state, action) => {
      const { section_id } = action.payload;
      delete state.sections[section_id];
    },
  },
});

export const { setSectionData, initializeSection, clearSection } =
  dataSlice.actions;
export default dataSlice.reducer;
