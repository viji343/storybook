import React from 'react';

import { Slider } from './Slider';

export default {
    title: 'Components/Slider',
    component: Slider,
    argTypes: {
        //backgroundColor: { control: 'color' },

    },
};

const Template = (args) => <Slider {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    maxValue:10,
    minValue:0,
};
