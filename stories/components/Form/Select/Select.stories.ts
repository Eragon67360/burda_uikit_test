import type { Meta, StoryObj } from '@storybook/html';
import { createSelect, SelectArgs } from './Select';

const meta: Meta<SelectArgs> = {
  title: 'Components (Atoms)/Form/Select',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable select component that supports both single and multiple selection modes.',
      },
    },
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
    multiple: {
      control: 'boolean',
      description: 'Enable multiple selection mode',
    },
  },
  render: (args) => createSelect(args),
};

export default meta;
type Story = StoryObj<SelectArgs>;

const defaultItems = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

const manyItems = [
  { value: '1', label: 'Marketing' },
  { value: '2', label: 'Sales' },
  { value: '3', label: 'Engineering' },
  { value: '4', label: 'Human Resources' },
  { value: '5', label: 'Legal' },
  { value: '6', label: 'Finance' },
  { value: '7', label: 'Operations' },
  { value: '8', label: 'Product' },
  { value: '9', label: 'Design' },
  { value: '10', label: 'Customer Support' },
];

export const SingleSelect: Story = {
  args: {
    placeholder: 'Select an option',
    items: defaultItems,
    labelText: 'Single Select',
    labelPosition: 'above',
    disabled: false,
    multiple: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default single-select variant with label positioned above.',
      },
    },
  },
};

export const MultiSelect: Story = {
  args: {
    placeholder: 'Select departments',
    items: manyItems,
    labelText: 'Multi Select',
    labelPosition: 'above',
    disabled: false,
    multiple: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Multi-select variant with checkboxes and selection counter badge. Supports scrollable list for many options.',
      },
    },
  },
};

export const LabelBeside: Story = {
  args: {
    ...SingleSelect.args,
    labelPosition: 'beside',
  },
  parameters: {
    docs: {
      description: {
        story: 'Single-select variant with label positioned beside the select.',
      },
    },
  },
};

export const MultiSelectBeside: Story = {
  args: {
    ...MultiSelect.args,
    labelPosition: 'beside',
  },
  parameters: {
    docs: {
      description: {
        story: 'Multi-select variant with label positioned beside the select.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...SingleSelect.args,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state of the select component.',
      },
    },
  },
};

export const DisabledMulti: Story = {
  args: {
    ...MultiSelect.args,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state of the multi-select component.',
      },
    },
  },
};
