import React from 'react';

import Section from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/Section',
  component: Section,
};

const Template = (args) => <Section {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content:
        'I am a software tester and developer in training, working in the UK education and library sector.',
  label: 'Click me',
};
