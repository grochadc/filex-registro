import { renderWithGql, screen, act } from "./testutils";
import userEvent from "@testing-library/user-event";
import {
  getApplicantMock,
  registerStudentMock,
  getApplicantNotFound,
  levelsFullMock,
} from "./testutils/gqlMocks";
import App from "./App";

describe("Integration", () => {
  test("succesful registration", async () => {
    renderWithGql(<App />, [getApplicantMock, registerStudentMock]);
    userEvent.type(screen.getByRole("textbox"), "1234567890");
    userEvent.click(screen.getByRole("button"));

    //Wait for gql data to arrive
    await act(
      async () => await new Promise((resolve) => setTimeout(resolve, 0))
    );
    expect(screen.getByText(/Selection/)).toBeInTheDocument();

    const schedulePicker = screen.getByRole("combobox");

    userEvent.selectOptions(schedulePicker, "E4-1");

    expect(
      screen.getByRole("option", { name: "E4-1 Gonzalo Rocha" }).selected
    ).toBe(true);

    userEvent.click(screen.getByRole("button", { name: /enviar/i }));
    expect(await screen.findByText(/Juan/i)).toBeInTheDocument();
    expect(await screen.findByText(/E4-1/i)).toBeInTheDocument();
    expect(await screen.findByText(/Gonzalo/i)).toBeInTheDocument();
    expect(await screen.findByText(/Juan/i)).toBeInTheDocument();
    expect(await screen.findByText(/somechatlink/i)).toBeInTheDocument();
    expect(await screen.findByText(/someclassroomlink/i)).toBeInTheDocument();
    expect(await screen.findByText(/somesesioneslink/i)).toBeInTheDocument();
  });

  test("applicant not found", async () => {
    renderWithGql(<App />, [getApplicantNotFound]);
    userEvent.type(screen.getByRole("textbox"), "1234509876");
    userEvent.click(screen.getByRole("button"));

    //Wait for gql data to arrive
    await act(
      async () => await new Promise((resolve) => setTimeout(resolve, 0))
    );
    expect(await screen.findByText(/encontramos/)).toBeInTheDocument();
  });

  test("level is full", async () => {
    renderWithGql(<App />, [levelsFullMock]);
    userEvent.type(screen.getByRole("textbox"), "1234567890");
    userEvent.click(screen.getByRole("button"));

    //Wait for gql data to arrive
    await act(
      async () => await new Promise((resolve) => setTimeout(resolve, 0))
    );
    expect(await screen.findByText(/llenos/i)).toBeInTheDocument();
  });
});
