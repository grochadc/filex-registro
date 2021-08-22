import { renderWithGql, screen, act } from "../testutils";
import userEvent from "@testing-library/user-event";
import Dashboard, { GET_LEVELS_REGISTERING } from "./Dashboard";

const mock = {
  request: {
    query: GET_LEVELS_REGISTERING,
  },
  result: { data: { english: ["4"], french: ["1"] } },
};

test("Dashboard", async () => {
  renderWithGql(<Dashboard />, [mock]);
  await act(async () => await new Promise((resolve) => setTimeout(resolve, 0)));
  expect(
    screen.getByText(/registering levels \(english\)/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/registering levels \(french\)/i)
  ).toBeInTheDocument();

  const allLabels = screen.getAllByText(/level 1/i);
  const firstInput = allLabels[0].closest("checkbox");
  userEvent.click(firstInput);
  expect(firstInput).toBeChecked();
});
