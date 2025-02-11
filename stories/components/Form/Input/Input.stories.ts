import type { Meta, StoryObj } from '@storybook/html';
import { InputArgs, createInput } from './Input';

const meta: Meta<InputArgs> = {
    title: 'Components/Form/Input',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['input', 'textarea'],
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'tel', 'number'],
        },
        label: {
            control: 'text',
        },
        labelPosition: {
            control: 'radio',
            options: ['top', 'side'],
        },
        placeholder: {
            control: 'text',
        },
        required: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        state: {
            control: 'select',
            options: ['default', 'error', 'success', 'highlighted'],
        },
        errorMessage: {
            control: 'text',
        },
        value: {
            control: 'text',
        },
    },
    render: (args) => createInput(args),
};

export default meta;
type Story = StoryObj<InputArgs>;

export const Default: Story = {
    args: {
        label: 'Label',
        placeholder: 'Enter your text',
    },
};

export const Required: Story = {
    args: {
        ...Default.args,
        required: true,
    },
};

export const WithError: Story = {
    args: {
        ...Default.args,
        state: 'error',
        errorMessage: 'This field is required',
    },
};

export const Success: Story = {
    args: {
        ...Default.args,
        state: 'success',
    },
};

export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true,
    },
};

export const TextArea: Story = {
    args: {
        ...Default.args,
        variant: 'textarea',
    },
};

export const SideLabel: Story = {
    args: {
        ...Default.args,
        labelPosition: 'side',
    },
};
