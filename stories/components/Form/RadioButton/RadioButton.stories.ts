import type { Meta, StoryObj } from '@storybook/html';
import { RadioButtonArgs, createRadioButton } from './RadioButton';

const meta: Meta<RadioButtonArgs> = {
    title: 'Components (Atoms)/Form/RadioButton',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        name: {
            control: 'text',
            description: 'Name attribute for the radio input',
        },
        value: {
            control: 'text',
            description: 'Value attribute for the radio input',
        },
        label: {
            control: 'text',
            description: 'Label text displayed next to the radio button',
        },
        fieldLabel: {
            control: 'text',
            description: 'Optional label displayed above the radio button',
        },
        checked: {
            control: 'boolean',
            description: 'Whether the radio button is checked',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the radio button is disabled',
        },
    },
    render: (args) => createRadioButton(args),
};

export default meta;
type Story = StoryObj<RadioButtonArgs>;

export const Default: Story = {
    args: {
        name: 'option',
        value: 'option1',
        label: 'Radio label',
    },
};

export const WithFieldLabel: Story = {
    args: {
        name: 'option',
        value: 'option1',
        label: 'Radio label',
        fieldLabel: 'Field Label',
    },
};

export const Checked: Story = {
    args: {
        name: 'option',
        value: 'option1',
        label: 'Radio label',
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        name: 'option',
        value: 'option1',
        label: 'Radio label',
        disabled: true,
    },
};
