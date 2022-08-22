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

const createData = (len: number) => {
  const arr = new Array(len).fill(0);
  return arr.map((el, i) => {
    const num = i + 1;
    return {
      id: num,
      teacher: `Nombre-${num}`,
      name: `E4-${num}`,
      ciclo: `Ciclo-`,
      time: `11:00-12:00`,
      aula: `G${num}`,
    };
  });
};

const schedules = createData(10);
console.log('schedules', schedules);

export const Normal = Template.bind({});
Normal.args = {
  schedules,
};
