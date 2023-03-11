import { getCounterValue } from "./getCounterValue";
import { DeepPartial } from "redux";
import { StateSchema } from "app/providers/StoreProvider";

describe("getCounterValue", () => {
  test("should return valid value", () => {

    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10
      }
    };

    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
