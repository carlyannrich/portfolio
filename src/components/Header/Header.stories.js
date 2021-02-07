import React from "react";
import { Header } from "./index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const primary = Template.bind({});
primary.args = {
  primary: true,
};

export const secondary = Template.bind({});
secondary.args = {
  primary: false,
};
