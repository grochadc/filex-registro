import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ScheduleSelection from "./index";
export default {
  title: "Components/ScheduleSelection",
  component: ScheduleSelection,
  argTypes: {
    onScheduleSelect: { action: "selected schedule" },
  },
} as ComponentMeta<typeof ScheduleSelection>;

const Template: ComponentStory<typeof ScheduleSelection> = (args) => (
  <ScheduleSelection {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  schedules: [
    { teacher: "Gonzalo", group: "E4-1" },
    { teacher: "Alondra", group: "E4-2" },
    { teacher: "Alondra", group: "E4-3" },
    { teacher: "Alondra", group: "E4-4" },
    { teacher: "Gonzalo", group: "E4-5" },
    { teacher: "Gonzalo", group: "E4-6" },
    { teacher: "Alondra", group: "E4-7" },
    { teacher: "Alondra", group: "E4-8" },
    { teacher: "Gonzalo", group: "E4-9" },
    { teacher: "Gonzalo", group: "E4-10" },
  ],
};
