import type { Meta, StoryObj } from '@storybook/html';
import { createSelectionList, SelectionListArgs } from './SelectionList';

const meta: Meta<SelectionListArgs> = {
  title: 'Components (Atoms)/List/SelectionList',

  parameters: {
    layout: 'centered',
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of radio options',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the radio group',
    },
    selectedValue: {
      control: 'text',
      description: 'Currently selected value',
    },
    backgroundColor: {
      control: 'select',
      options: ['white', 'gray'],
      description: 'Background color of the radio set',
    },
  },
  render: (args) => createSelectionList(args as any),
};

export default meta;
type Story = StoryObj<SelectionListArgs>;

export const White: Story = {
  args: {
    items: ['Lorem ipsum dolor sit amet 1', 'Lorem ipsum dolor sit amet 2', 'Lorem ipsum dolor sit amet 3'],
    name: 'radio-group',
    selectedValue: 'Lorem ipsum dolor sit amet 1',
    backgroundColor: 'white',
  },
};

export const Gray: Story = {
  args: {
    items: ['Lorem ipsum dolor sit amet 1', 'Lorem ipsum dolor sit amet 2', 'Lorem ipsum dolor sit amet 3'],
    name: 'radio-group',
    selectedValue: 'Lorem ipsum dolor sit amet 1',
    backgroundColor: 'gray',
  },
};
