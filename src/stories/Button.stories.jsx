import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    buttonType: {
      options: ['primary', 'secondary','tertiary','upgrade','warning','add-logo'],
      control: { type: 'select' }
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Button',
};
