import React from "react";

import Page from "./Page";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Example/Page",
    component: Page,
};

const Template = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    content:
        "I am a software tester and developer in training, working in the UK education and library sector.",
    label: "Click me",
};
