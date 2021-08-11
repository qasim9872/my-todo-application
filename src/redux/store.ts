import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import todoReducer from "../features/todo/todo.store";

export const store = configureStore({
  middleware: [logger],
  reducer: {
    todo: todoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
