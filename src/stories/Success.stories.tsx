import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from "@storybook/react/types-6-0";
import Success from "../components/Success";
import { MutationResponse } from "../types.d";

export default {
  title: "SuccessPage",
  component: Success,
};

type SuccessProps = {
  mutationResponse: MutationResponse | undefined;
};

const Template: Story<SuccessProps> = (args) => <Success {...args} />;

export const UndefinedMutation = Template.bind({});
UndefinedMutation.args = {
  mutationResponse: undefined,
};

export const AllLinks = Template.bind({});
UndefinedMutation.args = {
  mutationResponse: {
    chat: "https://somechatlink.com",
    classroom: "http://someclassroomlink.com",
    sesiones: "https://somesesioneslink.com",
  },
};

export const ClassroomCode = Template.bind({});
UndefinedMutation.args = {
  mutationResponse: {
    chat: "https://somechatlink.com",
    classroom: "somecode",
    sesiones: "https://somesesioneslink.com",
  },
};
