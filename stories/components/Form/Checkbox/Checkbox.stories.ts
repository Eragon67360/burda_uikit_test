import type { Meta, StoryObj } from '@storybook/html';
import { CheckboxArgs, createCheckbox } from './Checkbox';

const meta: Meta<CheckboxArgs> = {
  title: 'Components (Atoms)/Form/Checkbox',
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
    },
    name: {
      control: 'text',
      description: 'The name attribute for the checkbox input',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function when checkbox state changes',
    },
  },
  render: createCheckbox,
};

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    disabled: false,
    required: false,
    name: 'terms',
  },
};

export const Checked: Story = {
  args: {
    ...Default.args,
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
    label: 'Required checkbox *',
  },
};
