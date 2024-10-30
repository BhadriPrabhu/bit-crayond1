import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../redux/slices/searchSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;
