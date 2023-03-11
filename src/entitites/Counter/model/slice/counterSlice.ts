import { createSlice } from "@reduxjs/toolkit";
import { CounterSchema } from "entitites/Counter/model/types/counterSchema";

const initialState: CounterSchema = {
  value: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
