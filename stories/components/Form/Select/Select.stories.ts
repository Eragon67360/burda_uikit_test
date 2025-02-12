import type { Meta, StoryObj } from '@storybook/html';
import { createSelect, SelectArgs } from './Select';

const meta: Meta<SelectArgs> = {
    title: 'Components (Atoms)/Form/Select',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        placeholder: {
            control: 'text',
            description: 'Placeholder text shown when no option is selected',
        },
        items: {
            control: 'object',
            description: 'Array of items to display in the select',
        },
        labelText: {
            control: 'text',
            description: 'Label text for the select',
        },
        labelPosition: {
            control: { type: 'radio' },
            options: ['above', 'beside'],
            description: 'Position of the label relative to the select',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the select is disabled',
        },
    },
    render: (args) => createSelect(args)
};

export default meta;
type Story = StoryObj<SelectArgs>;

const defaultItems = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
];

export const Default: Story = {
    args: {
        placeholder: 'Select an option',
        items: defaultItems,
        labelText: 'Select Label',
        labelPosition: 'above',
        disabled: false,
    },
};

export const LabelBeside: Story = {
    args: {
        ...Default.args,
        labelPosition: 'beside',
    },
};

export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true,
    },
};
