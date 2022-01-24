import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import generateMock from "../testutils/generatedMocks";

import Dashboard, { GET_LEVELS_REGISTERING } from "./Dashboard";

export default {
  title: "Pages/Dashboard",
  component: Dashboard,
  parameters: {
    apolloClient: {
      mocks: [generateMock(GET_LEVELS_REGISTERING, {}, {})],
    },
  },
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = (args) => (
  <Dashboard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
