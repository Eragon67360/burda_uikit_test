import type { Meta, StoryObj } from '@storybook/html';
import { InputArgs, createInput } from './Input';

const meta: Meta<InputArgs> = {
    title: 'Components (Atoms)/Form/Input',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['input', 'textarea'],
            description: 'The variant of the input component'
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'tel', 'number'],
            description: 'The type of the input field'
        },
        label: {
            control: 'text',
            description: 'Label text for the input'
        },
        labelPosition: {
            control: 'radio',
            options: ['top', 'side'],
            description: 'Position of the label relative to the input'
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text'
        },
        required: {
            control: 'boolean',
            description: 'Whether the input is required'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the input is disabled'
        },
        state: {
            control: 'select',
            options: ['default', 'error', 'success', 'highlighted'],
            description: 'Current state of the input'
        },
        errorMessage: {
            control: 'text',
            description: 'Error message to display'
        },
        value: {
            control: 'text',
            description: 'Input value'
        }
    },
    render: (args) => createInput(args)
};

export default meta;
type Story = StoryObj<InputArgs>;

export const Default: Story = {
    args: {
        variant: 'input',
        type: 'text',
        label: 'Label',
        labelPosition: 'top',
        placeholder: 'Enter text...',
        required: false,
        disabled: false,
        state: 'default'
    }
};

export const WithError: Story = {
    args: {
        ...Default.args,
        state: 'error',
        errorMessage: 'This field is required'
    }
};

export const WithSuccess: Story = {
    args: {
        ...Default.args,
        state: 'success',
        value: 'Valid input',
        label: 'Successful Input'
    }
};

export const Highlighted: Story = {
    args: {
        ...Default.args,
        state: 'highlighted',
        value: 'Highlighted input',
        label: 'Highlighted Input'
    }
};

export const Textarea: Story = {
    args: {
        ...Default.args,
        variant: 'textarea',
        placeholder: 'Enter long text...'
    }
};

export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true
    }
};

export const Required: Story = {
    args: {
        ...Default.args,
        required: true
    }
};

export const SideLabel: Story = {
    args: {
        ...Default.args,
        labelPosition: 'side'
    }
};
