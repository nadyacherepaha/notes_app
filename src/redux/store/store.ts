import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "../reducers/notesReducer";

const notesReducer = notesSlice.reducer;

const setupStore = () =>
  configureStore({
    reducer: notesReducer,
  });

export type RootState = ReturnType<typeof notesReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export default setupStore;
