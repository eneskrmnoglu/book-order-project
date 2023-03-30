import { configureStore, combineReducers } from "@reduxjs/toolkit";
import control from "./admincontrol";
import bookReducer from "./bookSlice";

const reducer = combineReducers({
  adminControl: control,
  book: bookReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
