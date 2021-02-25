import * as React from "react";
import { render } from "@testing-library/react";
import { getApplicantMock, registerStudentMock } from "./gqlMocks";
import { MockedProvider } from "@apollo/client/testing";

const MockedProviderAny = MockedProvider as any;

const AllTheProviders = ({ children }) => {
  return (
    <MockedProviderAny
      mocks={[getApplicantMock, registerStudentMock]}
      addTypename={false}
    >
      {children}
    </MockedProviderAny>
  );
};

const renderWithGql = (ui) => render(ui, { wrapper: AllTheProviders });

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithGql };
