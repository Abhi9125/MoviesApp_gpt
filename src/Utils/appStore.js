import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./appSlice";
const appStore = configureStore({
  reducer: {
    userStore: userReducer,
  },
});
export default appStore;
