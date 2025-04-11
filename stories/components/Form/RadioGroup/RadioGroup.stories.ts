import type { Meta, StoryObj } from '@storybook/html';
import { RadioGroupArgs, createRadioGroup } from './RadioGroup';

const meta: Meta<RadioGroupArgs> = {
  title: 'Components (Atoms)/Form/RadioGroup',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Name attribute for the radio group',
    },
    options: {
      control: 'object',
      description: 'Array of radio options with value and label',
    },
    fieldLabel: {
      control: 'text',
      description: 'Optional label displayed above the radio group',
    },
    selectedValue: {
      control: 'text',
      description: 'Currently selected radio value',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire radio group is disabled',
    },
    direction: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Layout direction of the radio buttons',
    },
  },
  render: (args) => createRadioGroup(args),
};

export default meta;
type Story = StoryObj<RadioGroupArgs>;

const baseOptions = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
];

export const HorizontalBasic: Story = {
  args: {
    name: 'size',
    options: baseOptions,
    direction: 'horizontal',
  },
};

export const VerticalBasic: Story = {
  args: {
    name: 'size',
    options: baseOptions,
    direction: 'vertical',
  },
};

export const HorizontalWithFieldLabel: Story = {
  args: {
    name: 'size',
    options: baseOptions,
    fieldLabel: 'Select Size',
    direction: 'horizontal',
  },
};

export const VerticalWithFieldLabel: Story = {
  args: {
    name: 'size',
    options: baseOptions,
    fieldLabel: 'Select Size',
    direction: 'vertical',
  },
};

export const HorizontalWithSelection: Story = {
  args: {
    name: 'size',
    options: baseOptions,
    selectedValue: 'medium',
    direction: 'horizontal',
  },
};

export const VerticalWithSelection: Story = {
  args: {
    name: 'size',
    options: baseOptions,
    selectedValue: 'medium',
    direction: 'vertical',
  },
};

export const HorizontalComplete: Story = {
  args: {
    name: 'size',
    options: baseOptions,
    fieldLabel: 'Select Size',
    selectedValue: 'medium',
    direction: 'horizontal',
  },
};

export const VerticalComplete: Story = {
  args: {
    name: 'size',
    options: baseOptions,
    fieldLabel: 'Select Size',
    selectedValue: 'medium',
    direction: 'vertical',
  },
};

export const HorizontalDisabled: Story = {
  args: {
    name: 'size',
    options: baseOptions,
    fieldLabel: 'Select Size',
    disabled: true,
    direction: 'horizontal',
  },
};

export const VerticalDisabled: Story = {
  args: {
    name: 'size',
    options: baseOptions,
    fieldLabel: 'Select Size',
    disabled: true,
    direction: 'vertical',
  },
};

export const HorizontalDisabledWithSelection: Story = {
  args: {
    name: 'size',
    options: baseOptions,
    fieldLabel: 'Select Size',
    selectedValue: 'medium',
    disabled: true,
    direction: 'horizontal',
  },
};

export const VerticalDisabledWithSelection: Story = {
  args: {
    name: 'size',
    options: baseOptions,
    fieldLabel: 'Select Size',
    selectedValue: 'medium',
    disabled: true,
    direction: 'vertical',
  },
};

export const HorizontalManyOptions: Story = {
  args: {
    name: 'size',
    options: [
      { value: 'xs', label: 'Extra Small' },
      { value: 'sm', label: 'Small' },
      { value: 'md', label: 'Medium' },
      { value: 'lg', label: 'Large' },
      { value: 'xl', label: 'Extra Large' },
    ],
    fieldLabel: 'Select Size',
    direction: 'horizontal',
  },
};

export const VerticalManyOptions: Story = {
  args: {
    name: 'size',
    options: [
      { value: 'xs', label: 'Extra Small' },
      { value: 'sm', label: 'Small' },
      { value: 'md', label: 'Medium' },
      { value: 'lg', label: 'Large' },
      { value: 'xl', label: 'Extra Large' },
    ],
    fieldLabel: 'Select Size',
    direction: 'vertical',
  },
};

export const HorizontalLongLabels: Story = {
  args: {
    name: 'preference',
    options: [
      { value: 'option1', label: 'This is a very long label that might wrap' },
      { value: 'option2', label: 'Another lengthy option label here' },
      { value: 'option3', label: 'Yet another long description for testing' },
    ],
    fieldLabel: 'Select your preference',
    direction: 'horizontal',
  },
};

export const VerticalLongLabels: Story = {
  args: {
    name: 'preference',
    options: [
      { value: 'option1', label: 'This is a very long label that might wrap' },
      { value: 'option2', label: 'Another lengthy option label here' },
      { value: 'option3', label: 'Yet another long description for testing' },
    ],
    fieldLabel: 'Select your preference',
    direction: 'vertical',
  },
};
