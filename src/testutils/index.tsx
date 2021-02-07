import React from "react";
import { render } from "@testing-library/react";
import { getApplicantMock, registerStudentMock } from "./gqlMocks";
import { MockedProvider } from "@apollo/client/testing";

const AllTheProviders = ({ children }) => {
  return (
    <MockedProvider
      mocks={[getApplicantMock, registerStudentMock]}
      addTypename={false}
    >
      {children}
    </MockedProvider>
  );
};

const renderWithGql = (ui) => render(ui, { wrapper: AllTheProviders });

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithGql };
