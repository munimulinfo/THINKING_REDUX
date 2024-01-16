import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featuers/CounterSlice";
import { logger } from "./middleware/Logger";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDeafaultMiddleware) => getDeafaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
