import React, { useEffect, useState, useReducer } from "react";
import { screen, render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useMutation } from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import { RegisterStudent } from ".";

import { RegisterStudentMutationVariables } from "../../generated/grapqhl-types";

const variables: RegisterStudentMutationVariables = {
  codigo: "1234567890",
  nombre: "Applicant-nombre",
  apellido_materno: "Applicant-apellido_materno",
  apellido_paterno: "Applicant-apellido_paterno",
  genero: "M",
  carrera: "Applicant-carrera",
  ciclo: "2022A",
  telefono: "3411234567",
  email: "email@website.com",
  nivel: "4",
  curso: "en",
  externo: true,
  schedule: "E4-1",
};

const Component = () => {
  const reducer = (
    state: any,
    action: { type: "setStudent" | "setSchedule"; payload?: any }
  ) => {
    switch (action.type) {
      case "setStudent":
        return { ...state, ...action.payload };
      case "setSchedule":
        return { ...state, schedule: action.payload };
      default:
        throw new Error("No action.type matched on reducer");
    }
  };

  const [student, dispatch] = useReducer(reducer, {});
  const [route, setRoute] = useState<"info" | "schedule" | "finished">("info");

  const [registerStudent, { data, loading, error }] =
    useMutation(RegisterStudent);

  const handleSubmit = (student: any) => {
    dispatch({ type: "setStudent", payload: student });
    setRoute("schedule");
  };
  const handleSchedule = (schedule: number) => {
    registerStudent({ variables: { ...student, schedule: "E4-1" } });
  };

  if (error) return <>{JSON.stringify(error)}</>;
  return (
    <>
      {route === "finished" ? (
        <>{JSON.stringify(data)}</>
      ) : route === "info" ? (
        <button
          id="enviarInfo"
          onClick={() =>
            handleSubmit({
              codigo: "1234567890",
              nombre: "Applicant-nombre",
              apellido_materno: "Applicant-apellido_materno",
              apellido_paterno: "Applicant-apellido_paterno",
              genero: "M",
              carrera: "Applicant-carrera",
              ciclo: "2022A",
              telefono: "3411234567",
              email: "email@website.com",
              nivel: "4",
              curso: "en",
              externo: true,
              schedule: "E4-1",
            })
          }
        >
          enviar info
        </button>
      ) : (
        <button id="enviarSchedule" onClick={() => handleSchedule(0)}>
          elegir schedule
        </button>
      )}
    </>
  );
};

test("queries the schema", async () => {
  render(
    <MockedProvider
      mocks={[
        {
          request: {
            query: RegisterStudent,
            variables,
          },
          result: {
            data: {
              registerStudent: {
                nombre: "RegisterResponse-nombre",
                schedule: {
                  group: "Schedule-group",
                  teacher: "Schedule-teacher",
                  entry: "Schedule-entry",
                  __typename: "Schedule",
                },
                __typename: "RegisterResponse",
              },
            },
          },
        },
      ]}
    >
      <Component />
    </MockedProvider>
  );
  await act(async () => await new Promise((resolve) => setTimeout(resolve, 0)));

  expect(screen.getByText(/enviar/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/enviar/i)); //enviar info

  await act(async () => await new Promise((resolve) => setTimeout(resolve, 0)));

  userEvent.click(screen.getByText(/schedule/i)); //elegir schedule

  await act(async () => await new Promise((resolve) => setTimeout(resolve, 0)));

  expect(screen.getByText("RegisterResponse-nombre")).toBeInTheDocument();
});
