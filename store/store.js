import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import editorReducer from "./editorSlice/editorSlice";
import cardReducer from "./cardSlice/cardSlice";
export function makeStore() {
  return configureStore({
    reducer: { editor: editorReducer, card: cardReducer },
  });
}

const store = makeStore();

export default store;
