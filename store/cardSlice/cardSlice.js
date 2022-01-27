import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageIndex: 0,
  isOpen: false,
  frontPage: {
    imageUrl: "",
  },
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setFrontCover: (state, action) => {
      state.frontPage.imageUrl = action.payload;
    },
    nextPage: (state) => {
      state.pageIndex = state.pageIndex + 1;
      state.forward = true;
    },
    prevPage: (state) => {
      state.pageIndex = state.pageIndex - 1;
      state.forward = false;
    },
  },
});

export const { setFrontCover, nextPage, prevPage } = cardSlice.actions;

export default cardSlice.reducer;
