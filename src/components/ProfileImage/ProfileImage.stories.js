import React from "react";

import ProfileImage from "./index";
import image from "../assets/carly.PNG";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Example/ProfileImage",
    component: ProfileImage,
};

const Template = (args) => <ProfileImage {...args} />;

export const Large = Template.bind({});
Large.args = {
    size: "large",
    src: image,
};

export const Medium = Template.bind({});
Medium.args = {
    size: "medium",
    src: image,
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    src: image,
};
