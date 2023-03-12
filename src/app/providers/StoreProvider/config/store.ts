import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducer } from "entitites/User";
import { loginReducer } from "features/AuthByUsername";

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      user: userReducer,
      loginForm: loginReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}
