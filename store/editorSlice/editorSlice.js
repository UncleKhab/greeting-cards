import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab: "Animations",
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { changeTab } = editorSlice.actions;

export default editorSlice.reducer;
