import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("Home", () => {
  const history = createMemoryHistory();
  const pushSpy = jest.spyOn(history, "push");
  render(
    <Router history={history}>
      <Home />
    </Router>
  );
  userEvent.type(screen.getByRole("textbox"), "1234567890");
  userEvent.click(screen.getByRole("button"));
  expect(pushSpy).toHaveBeenCalledWith("/selection/1234567890");
});
