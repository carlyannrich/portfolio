import React from "react";

import { Header } from "./index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Example/Header",
    component: Header,
};

const Template = (args) => <Header {...args} />;

export const Version1 = Template.bind({});
Version1.args = {};

export const Version2 = Template.bind({});
Version2.args = {};
