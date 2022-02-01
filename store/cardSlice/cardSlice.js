import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageIndex: 0,
  isOpen: false,
  frontPage: {
    imageUrl: undefined,
    animation: undefined,
    theme: undefined,
    backgroundColor: undefined,
  },
  inside: {
    template: {
      type: 0,
      content: {
        imageUrl: "/assets/svg/image-placeholder.svg",
        title: "Hello World",
        textContent:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus omnis nostrum nisi voluptatibus, suscipit animi voluptatum perspiciatis nobis ipsam autem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus omnis nostrum nisi voluptatibus, suscipit animi voluptatum perspiciatis nobis ipsam autem.",
      },
    },
    decorations: undefined,
    pageTexture: undefined,
    animation: undefined,
  },
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.pageIndex = state.pageIndex + 1;
      state.forward = true;
    },
    prevPage: (state) => {
      state.pageIndex = state.pageIndex - 1;
      state.forward = false;
    },
    setFrontCover: (state, action) => {
      state.frontPage.imageUrl = action.payload;
    },
    setInside: (state, action) => {
      const { tab, value } = action.payload;
      switch (tab) {
        case 0:
          state.inside.template.type = value;
          break;
        default:
          break;
      }
    },
  },
});

export const { nextPage, prevPage, setFrontCover, setInside } =
  cardSlice.actions;

export default cardSlice.reducer;
