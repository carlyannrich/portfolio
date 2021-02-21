import React from 'react';

import MenuIcon from './index';
import image from '../assets/menu.svg';

export default {
  title: 'Components/MenuIcon',
  component: MenuIcon,
};

const Template = (args) => <MenuIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: image,
  alt: '',
};
