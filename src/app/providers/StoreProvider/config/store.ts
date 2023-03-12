import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entitites/Counter/model/slice/counterSlice";
import { userReducer } from "entitites/User";

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}
