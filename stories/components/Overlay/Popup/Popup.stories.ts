import type { Meta, StoryObj } from '@storybook/html';
import { PopupArgs, PopupTriggerArgs, createPopupWithTrigger } from './Popup';
import { IconRegistry, IconCategory } from '@/assets/icons';

const meta: Meta<PopupTriggerArgs> = {
    title: 'Components (Atoms)/Overlay/Popup',

    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['error', 'success', 'info'],
        },
        position: {
            control: 'select',
            options: ['top-right', 'top', 'top-left', 'bottom-right', 'bottom', 'bottom-left'],
        },
        title: { control: 'text' },
        description: { control: 'text' },
        action: { control: 'object' },
        triggerLabel: { control: 'text' },
        triggerVariant: {
            control: 'select',
            options: ['primary', 'secondary'],
        },
    },
    render: (args) => createPopupWithTrigger(args),
};

export default meta;
type Story = StoryObj<PopupTriggerArgs>;

export const ErrorToast: Story = {
    args: {
        variant: 'error',
        position: 'top-right',
        title: 'Error Occurred',
        description: 'Something went wrong while processing your request.',
        action: {
            label: 'Zum Kundensupport',
            icon: IconRegistry[IconCategory.SYSTEM].arrowRight,
            href: '#support'
        },
        triggerLabel: 'Show Error Toast',
    },
};

export const SuccessToast: Story = {
    args: {
        variant: 'success',
        position: 'top-right',
        title: 'Successfully Saved',
        description: 'Your changes have been saved successfully.',
        triggerLabel: 'Show Success Toast',
    },
};

export const InfoToast: Story = {
    args: {
        variant: 'info',
        position: 'bottom',
        title: 'New Update Available',
        description: 'A new version of the application is available.',
        triggerLabel: 'Show Info Toast',
        triggerVariant: 'secondary',
    },
};

export const PositionedToasts: Story = {
    render: () => {
        const wrapper = document.createElement('div');
        wrapper.className = 'space-y-4';

        const positions: PopupArgs['position'][] = ['top-right', 'top', 'top-left', 'bottom-right', 'bottom', 'bottom-left'];

        positions.forEach(position => {
            const toast = createPopupWithTrigger({
                variant: 'info',
                position,
                title: `${position} Toast`,
                description: `This toast appears in the ${position} position`,
                triggerLabel: `Show ${position} Toast`,
                triggerVariant: 'secondary',
            });
            wrapper.appendChild(toast);
        });

        return wrapper;
    },
};
