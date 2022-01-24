import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});

export const { setFrontCover } = cardSlice.actions;

export default cardSlice.reducer;
