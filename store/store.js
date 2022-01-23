import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import editorReducer from "./editorSlice/editorSlice";

export function makeStore() {
  return configureStore({
    reducer: { editor: editorReducer },
  });
}

const store = makeStore();

export default store;
