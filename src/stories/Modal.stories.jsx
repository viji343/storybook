import React from 'react';

import { Modal } from './Modal';

export default {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        type: {
            options: ['basic', 'info', 'confirmation'],
            control: { type: 'select' }
        }
    },
};

const Template = (args) => <Modal {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    modalHeader: "Basic",
    modalContent: "Lorem ipsum contents",
};
