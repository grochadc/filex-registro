import { renderWithGql, screen, act } from "./testutils";
import userEvent from "@testing-library/user-event";
import apolloMock from "./testutils/generatedMocks";
import { GET_APPLICANT, REGISTER_STUDENT } from "./pages/Selection";
import { GraphQLError } from "graphql";
import App from "./App";

const applicantInfo = {
  codigo: "1234567890",
  nombre: "Juan",
  apellido_materno: "Preciado",
  apellido_paterno: "Paramo",
  genero: "M",
  carrera: "Agronegocios",
  ciclo: "1955B",
  telefono: "3411234567",
  email: "juan@lamedialuna.net",
  nivel: "4",
  curso: "en",
  externo: false,
  desertor: false,
  schedule: "E4-1",
};

describe("Integration", () => {
  test("succesful registration", async () => {
    const getApplicantMockGenerated = apolloMock(
      GET_APPLICANT,
      { codigo: "1234567890" },
      {
        data: {
          applicant: {
            ...applicantInfo,
            registering: true,
            schedules: [
              {
                teacher: "Gonzalo Rocha",
                group: "E4-1",
                serialized: "E4-1 Gonzalo Rocha",
              },
            ],
          },
        },
      }
    );
    const registerStudentMockGenerated = apolloMock(
      REGISTER_STUDENT,
      { ...applicantInfo, schedule: "E4-1" },
      {
        data: {
          registerStudent: {
            nombre: "Juan",
            schedule: {
              group: "E4-1",
              teacher: "Gonzalo Rocha",
              entry: "https://entryurl.com",
            },
          },
        },
      }
    );
    renderWithGql(<App />, [
      getApplicantMockGenerated,
      registerStudentMockGenerated,
    ]);
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
    expect(await screen.findByText(/entryurl/i)).toBeInTheDocument();
  });

  test("applicant not found", async () => {
    const APPLICANT_NOT_FOUND = "APPLICANT_NOT_FOUND";
    const getAppliccantNotFoundGenerated = apolloMock(
      GET_APPLICANT,
      { codigo: "1234509876" },
      {
        errors: [
          new GraphQLError(
            "No applicant found with code 123450987",
            null,
            null,
            null,
            null,
            null,
            { code: APPLICANT_NOT_FOUND }
          ),
        ],
      }
    );
    renderWithGql(<App />, [getAppliccantNotFoundGenerated]);
    userEvent.type(screen.getByRole("textbox"), "1234509876");
    userEvent.click(screen.getByRole("button"));

    //Wait for gql data to arrive
    await act(
      async () => await new Promise((resolve) => setTimeout(resolve, 0))
    );
    expect(await screen.findByText(/encontramos/)).toBeInTheDocument();
  });

  test("level is full", async () => {
    const levelsFullMockGenerated = apolloMock(
      GET_APPLICANT,
      { codigo: "1234567890" },
      { data: { applicant: { registering: true, schedules: [] } } }
    );
    renderWithGql(<App />, [levelsFullMockGenerated]);
    userEvent.type(screen.getByRole("textbox"), "1234567890");
    userEvent.click(screen.getByRole("button"));

    //Wait for gql data to arrive
    await act(
      async () => await new Promise((resolve) => setTimeout(resolve, 0))
    );
    expect(await screen.findByText(/llenos/i)).toBeInTheDocument();
  });

  test("desertor is warned", async () => {
    const getDesertorMock = apolloMock(
      GET_APPLICANT,
      { codigo: "1234567890" },
      {
        data: {
          applicant: {
            desertor: true,
            registering: true,
            schedules: [
              {
                teacher: "GONZALO ROCHA",
                group: "E4-1",
                serialized: "E4-1 GONZALO ROCHA ",
              },
            ],
          },
        },
      }
    );
    renderWithGql(<App />, [getDesertorMock]);
    userEvent.type(screen.getByRole("textbox"), "1234567890");
    userEvent.click(screen.getByRole("button"));
    await act(
      async () => await new Promise((resolve) => setTimeout(resolve, 0))
    );
    expect(await screen.findByText(/desertar dos veces/i)).toBeInTheDocument();
  });

  test("handles already registered", async () => {
    const alreadyRegisteredMockGenerated = apolloMock(
      GET_APPLICANT,
      { codigo: "1234567890" },
      {
        data: {
          applicant: {
            registeredSchedule: {
              teacher: "Gonzalo Rocha",
              group: "E4-1",
              entry: "https://entryurl.com",
            },
          },
        },
      }
    );
    renderWithGql(<App />, [alreadyRegisteredMockGenerated]);
    userEvent.type(screen.getByRole("textbox"), "1234567890");
    userEvent.click(screen.getByRole("button"));
    await act(
      async () => await new Promise((resolve) => setTimeout(resolve, 0))
    );
    expect(await screen.findByText(/entryurl.com/i));
  });
});
