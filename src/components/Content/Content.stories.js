import React from 'react';

import Content from './index';

export default {
  title: 'Components/Content',
  component: Content,
};

const Template = (args) => <Content {...args} />;

export const Default = Template.bind({});
Default.args = {
};
