import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from "@storybook/react/types-6-0";
import LevelsForm, {
  LevelsFormProps,
} from "../components/Dashboard/LevelsRegistering";

const normal = {
  title: "LevelsForm",
  component: LevelsForm,
};
export default normal;

const Template: Story<LevelsFormProps> = (args) => <LevelsForm {...args} />;

export const LevelsThreeAndFour = Template.bind({});
LevelsThreeAndFour.args = {
  registering: [3, 4],
  handleSave: (levels) => alert(levels),
};
