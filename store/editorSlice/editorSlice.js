import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditorOpen: false,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    toggleEditor: (state) => {
      state.isEditorOpen = !state.isEditorOpen;
    },
  },
});

export const { toggleEditor } = editorSlice.actions;

export default editorSlice.reducer;
