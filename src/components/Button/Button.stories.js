import React from 'react';

import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {

};

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
};
