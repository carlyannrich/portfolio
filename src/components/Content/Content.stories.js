import React from "react";

import { Content } from "./index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Example/Content",
    component: Content,
};

const Template = (args) => <Content {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    content:
        "I am a software tester and developer in training, working in the UK education and library sector.",
};
