import { SelectionListArgs } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createSelectionList } from './SelectionList';

const meta: Meta<SelectionListArgs> = {
  title: 'Components (Atoms)/List/SelectionList',
  tags: ['!autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A radio button selection list component that allows users to choose one option from a vertical list. Supports different background colors and provides accessible radio button controls with custom styling.',
      },
    },
    backgrounds: {
      default: 'Gray',
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of radio options',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    name: {
      control: 'text',
      description: 'Name attribute for the radio group',
      table: {
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
    selectedValue: {
      control: 'text',
      description: 'Currently selected value',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    backgroundColor: {
      control: 'select',
      options: ['white', 'gray'],
      description: 'Background color of the radio set',
      table: {
        category: ArgsCategory.PROPS,
        defaultValue: { summary: 'white' },
      },
    },
    onChange: {
      description: 'Callback function triggered when selection changes',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
  },
  render: (args) => createSelectionList(args),
};

export default meta;
type Story = StoryObj<SelectionListArgs>;

export const White: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default selection list with white background, suitable for standard content areas.',
      },
    },
    backgrounds: {
      default: 'Gray',
    },
  },
  args: {
    items: ['Lorem ipsum dolor sit amet 1', 'Lorem ipsum dolor sit amet 2', 'Lorem ipsum dolor sit amet 3'],
    name: 'radio-group',
    selectedValue: 'Lorem ipsum dolor sit amet 1',
    backgroundColor: 'white',
  },
};

export const Gray: Story = {
  parameters: {
    backgrounds: {
      default: 'White',
    },
    docs: {
      description: {
        story: 'Selection list with gray background, providing subtle visual distinction from the surrounding content.',
      },
    },
  },
  args: {
    items: ['Lorem ipsum dolor sit amet 1', 'Lorem ipsum dolor sit amet 2', 'Lorem ipsum dolor sit amet 3'],
    name: 'radio-group',
    selectedValue: 'Lorem ipsum dolor sit amet 1',
    backgroundColor: 'gray',
  },
};
