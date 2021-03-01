import * as React from "react";
import { render } from "@testing-library/react";
import { Mock } from "./types";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router";

const MockedProviderAny = MockedProvider as any;

const AllTheProviders = ({
  children,
  mocks,
}: {
  children: any;
  mocks: Mock[];
}) => {
  return (
    <MockedProviderAny mocks={mocks} addTypename={false}>
      <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
    </MockedProviderAny>
  );
};

const renderWithGql = (ui, mocks: Mock[]) =>
  render(ui, {
    wrapper: (props: any) => <AllTheProviders {...props} mocks={mocks} />,
  });

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithGql };
