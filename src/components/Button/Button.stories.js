import React from 'react';

import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  primary: false,
};
