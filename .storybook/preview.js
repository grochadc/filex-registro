import { MockedProvider } from "@apollo/client/testing";
import "./preview.css";
import "bootstrap/dist/css/bootstrap.min.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  parameters: {
    apolloClient: {
      MockedProvider,
    },
  },
};
