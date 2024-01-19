import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./featuers/todoSlice";
// import { logger } from "./middleware/logger";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
