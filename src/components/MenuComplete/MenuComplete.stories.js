import React from 'react';

import MenuComplete from './index';

export default {
  title: 'Components/MenuComplete',
  component: MenuComplete,
};

const Template = (args) => <MenuComplete {...args} />;

export const Default = Template.bind({});
Default.args = {
};
