import { createSelector } from "reselect";
import { getCounter } from "../getCounter/getCounter";
import { CounterSchema } from "entitites/Counter";

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value
);
