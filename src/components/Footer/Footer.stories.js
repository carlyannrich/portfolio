import React from "react";
import { Footer } from "./index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const primary = Template.bind({});
primary.args = {
  primary: true,
};

export const secondary = Template.bind({});
secondary.args = {
  primary: false,
};
