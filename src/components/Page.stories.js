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
    content: "Hello.",
    content2: "Geia sou",
    content3: "Kalispera",
    label: "Click me",
};
