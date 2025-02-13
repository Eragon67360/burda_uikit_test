import type { Meta, StoryObj } from '@storybook/html';
import { createToggleSwitch, ToggleSwitchArgs } from './ToggleSwitch';

const meta: Meta<ToggleSwitchArgs> = {
    title: 'Components (Atoms)/Form/ToggleSwitch',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A toggle switch component that can be used to switch between two states.',
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Label text to display next to the toggle switch',
        },
        checked: {
            control: 'boolean',
            description: 'Whether the toggle is checked',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the toggle is disabled',
        },
        id: {
            control: 'text',
            description: 'Optional ID for the input element',
        },
    },
    render: (args) => createToggleSwitch(args),
};

export default meta;
type Story = StoryObj<ToggleSwitchArgs>;

export const Default: Story = {
    args: {
        label: 'Toggle Switch',
        checked: false,
        disabled: false,
    },
};

export const Checked: Story = {
    args: {
        label: 'Toggle Switch',
        checked: true,
        disabled: false,
    },
};

export const WithoutLabel: Story = {
    args: {
        checked: false,
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Toggle',
        checked: false,
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'Disabled Checked Toggle',
        checked: true,
        disabled: true,
    },
};
