import React from "react";

import Page from "./Page";
import * as HeaderStories from "./Header/Header.stories";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Example/Page",
    component: Page,
};

const Template = (args) => <ProfileImage {...args} />;

export const Large = Template.bind({});
Large.args = {
    size: "large",
    src: image,
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    src: image,
};
