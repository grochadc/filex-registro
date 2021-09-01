import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from "@storybook/react/types-6-0";
import { ApplicantEditor } from "../components/ApplicantEditor";

const normalDefault = {
  title: "ApplicantEditor",
  component: ApplicantEditor,
};

export default normalDefault;
const Template: Story<any> = (args) => <ApplicantEditor {...args} />;

export const NormalEditor = Template.bind({});
NormalEditor.args = {
  initialValues: {
    codigo: "12344567890",
    nombre: "Benito Antonio",
    nivel: "1",
    curso: "en",
  },
  onSubmit: (values: any) => alert(JSON.stringify(values)),
};
