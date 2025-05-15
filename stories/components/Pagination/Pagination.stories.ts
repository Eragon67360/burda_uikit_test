import { PaginationArgs } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createPagination } from './Pagination';

const meta: Meta<PaginationArgs> = {
  title: 'Components (Atoms)/Pagination',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A pagination component that allows users to navigate through multiple pages of content. Provides clear visual feedback for current page and disabled states.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['white', 'grey'],
      description: 'Background variant of the pagination',
      table: {
        category: ArgsCategory.PROPS,
        defaultValue: { summary: 'white' },
      },
    },
    currentPage: {
      control: 'number',
      description: 'Current active page number',
      table: {
        category: ArgsCategory.PROPS,
        type: { summary: 'number' },
        required: true,
      },
    },
    totalPages: {
      control: 'number',
      description: 'Total number of available pages',
      table: {
        category: ArgsCategory.PROPS,
        type: { summary: 'number' },
        required: true,
      },
    },
    onPageChange: {
      action: 'page changed',
      description: 'Callback function triggered when page is changed',
      table: {
        category: ArgsCategory.EVENTS,
        type: { summary: '(page: number) => void' },
      },
    },
  },
  render: (args) => createPagination(args),
};

export default meta;
type Story = StoryObj<PaginationArgs>;

export const White: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default white background variant showing first page selected.',
      },
    },
  },
  args: {
    variant: 'white',
    currentPage: 1,
    totalPages: 10,
  },
};

export const Grey: Story = {
  parameters: {
    backgrounds: {
      default: 'White',
    },
    docs: {
      description: {
        story: 'Grey background variant for better contrast on white backgrounds.',
      },
    },
  },
  args: {
    variant: 'grey',
    currentPage: 1,
    totalPages: 10,
  },
};

export const MiddlePages: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows how pagination appears when a middle page is selected.',
      },
    },
  },
  args: {
    variant: 'white',
    currentPage: 5,
    totalPages: 10,
  },
};

export const LastPages: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates pagination behavior near the last pages.',
      },
    },
  },
  args: {
    variant: 'white',
    currentPage: 9,
    totalPages: 10,
  },
};
