import { configureStore } from "@reduxjs/toolkit";
import merchantReducer from "./merchantSlice"; // Update path as needed

const store = configureStore({
  reducer: {
    merchant: merchantReducer,
  },
});

export default store;
