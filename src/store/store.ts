import { configureStore } from "@reduxjs/toolkit";
import { webixApi } from "./webixApi";

export const store = configureStore({
  reducer: {
    [webixApi.reducerPath]: webixApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(webixApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
