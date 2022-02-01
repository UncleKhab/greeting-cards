import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditorOpen: false,
  tab: 0,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    toggleEditor: (state) => {
      state.isEditorOpen = !state.isEditorOpen;
    },
    changeTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { toggleEditor, changeTab } = editorSlice.actions;

export default editorSlice.reducer;
