import { configureStore } from "@reduxjs/toolkit";
import { bookApi, chooseApi,contactApi,homeApi,serviceApi, successApi, trainApi, whoApi } from "./apiSlice";
import { userSlice } from "./userSlice";
import { getUserApi, loginApi, registerApi } from "./userApi";

export const store = configureStore({
  reducer: {
    [userSlice.name]:userSlice.reducer,
    [serviceApi.reducerPath]:serviceApi.reducer,
    [trainApi.reducerPath]:trainApi.reducer,
    [whoApi.reducerPath]:whoApi.reducer,
    [successApi.reducerPath]:successApi.reducer,
    [chooseApi.reducerPath]:chooseApi.reducer,
    [homeApi.reducerPath]:homeApi.reducer,
    [contactApi.reducerPath]:contactApi.reducer,
    [loginApi.reducerPath]:loginApi.reducer,
    [registerApi.reducerPath]:registerApi.reducer,
    [bookApi.reducerPath]:bookApi.reducer,
    [getUserApi.reducerPath]:getUserApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      serviceApi.middleware,
      trainApi.middleware,
      whoApi.middleware,
      successApi.middleware,
      chooseApi.middleware,
      homeApi.middleware,
      contactApi.middleware,
      loginApi.middleware,
      registerApi.middleware,
      bookApi.middleware,
      getUserApi.middleware
    )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
