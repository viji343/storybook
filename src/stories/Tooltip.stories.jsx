import React from 'react';

import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    backgroundColor: { control: 'color' },
    position: {
        options: ['left', 'right','top','bottom'],
        control: { type: 'select' }
      }
  },
};

const Template = (args) => <Tooltip {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};


