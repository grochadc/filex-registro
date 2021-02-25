import { renderWithGql, screen, act } from "./testutils";
import userEvent from "@testing-library/user-event";
import history from "./utils/history";
import App from "./App";

test("Integration", async () => {
  const pushSpy = jest.spyOn(history, "push");
  renderWithGql(<App />);
  userEvent.type(screen.getByRole("textbox"), "1234567890");
  userEvent.click(screen.getByRole("button"));

  //Wait for gql data to arrive
  await act(async () => await new Promise((resolve) => setTimeout(resolve, 0)));
  expect(screen.getByText(/Selection/)).toBeInTheDocument();

  const schedulePicker = screen.getByRole("combobox");

  userEvent.selectOptions(schedulePicker, "E4-1");

  expect(
    screen.getByRole("option", { name: "E4-1 Gonzalo Rocha" }).selected
  ).toBe(true);

  userEvent.click(screen.getByRole("button", { name: /enviar/i }));
  expect(await screen.findByText(/felicidades/i)).toBeInTheDocument();
});
