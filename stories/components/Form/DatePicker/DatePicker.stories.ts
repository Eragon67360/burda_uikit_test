// DatePicker.stories.ts
import type { Meta, StoryObj } from '@storybook/html';
import { createDatePicker, DatePickerArgs } from './DatePicker';

const meta: Meta<DatePickerArgs> = {
  title: 'Components (Atoms)/Form/DatePicker',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    required: { control: 'boolean' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
    language: {
      control: 'select',
      options: ['EN', 'DE'],
    },
    onChange: { action: 'date changed' },
  },
  render: (args) => createDatePicker(args),
};

export default meta;
type Story = StoryObj<DatePickerArgs>;

export const Primary: Story = {
  args: {
    label: 'Select Date',
    placeholder: 'MM/DD/YYYY',
    language: 'EN',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Select Date',
    value: '04/15/2024',
    language: 'EN',
  },
};

export const German: Story = {
  args: {
    label: 'Datum auswählen',
    placeholder: 'TT.MM.JJJJ',
    language: 'DE',
  },
};

export const GermanWithValue: Story = {
  args: {
    label: 'Datum auswählen',
    value: '15.04.2024',
    language: 'DE',
  },
};

export const WithError: Story = {
  args: {
    label: 'Select Date',
    error: 'Please select a valid date',
    language: 'EN',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Select Date',
    disabled: true,
    language: 'EN',
  },
};
