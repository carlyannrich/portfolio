import React from 'react';

import ProfileImage from './index';

export default {
  title: 'Components/ProfileImage',
  component: ProfileImage,
};

const Template = (args) => <ProfileImage {...args} />;

export const Default = Template.bind({});
Default.args = {
};
