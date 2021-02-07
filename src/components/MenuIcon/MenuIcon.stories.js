import React from "react";

import MenuIcon from "./index";
import image from "../assets/menu.svg";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/MenuIcon",
  component: MenuIcon,
};

const Template = (args) => <MenuIcon {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  src: image,
};
