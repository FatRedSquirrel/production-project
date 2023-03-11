import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("valid value", () => {
    componentRender(<Counter/>, {
      initialState: { counter: { value: 10 } }
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("increment", () => {
    componentRender(<Counter/>, {
      initialState: { counter: { value: 10 } }
    });
    const incrementBtn = screen.getByTestId("increment-btn");
    const valueText = screen.getByTestId("value-title");
    fireEvent.click(incrementBtn);
    expect(valueText).toHaveTextContent("11");
  });

  test("decrement", () => {
    componentRender(<Counter/>, {
      initialState: { counter: { value: 10 } }
    });
    const incrementBtn = screen.getByTestId("decrement-btn");
    const valueText = screen.getByTestId("value-title");
    fireEvent.click(incrementBtn);
    expect(valueText).toHaveTextContent("9");
  });
});
