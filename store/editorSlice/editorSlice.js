import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  tab: 0,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.tab = action.payload;
    },
    nextPage: (state) => {
      state.page += 1;
      state.tab = 0;
    },
    prevPage: (state) => {
      state.page -= 1;
      state.tab = 0;
    },
  },
});

export const { changeTab, nextPage, prevPage } = editorSlice.actions;

export default editorSlice.reducer;
