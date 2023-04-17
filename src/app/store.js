import { configureStore } from '@reduxjs/toolkit';
import userListReducer from '../../src/features/User/userListSlice'

export const store = configureStore({
  reducer: {
    user: userListReducer
  }
});