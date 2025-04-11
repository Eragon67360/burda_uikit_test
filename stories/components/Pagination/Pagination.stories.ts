import type { Meta, StoryObj } from '@storybook/html';
import { createPagination, PaginationArgs } from './Pagination';

const meta: Meta<PaginationArgs> = {
  title: 'Components (Atoms)/Pagination',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['white', 'grey'],
      description: 'Background variant of the pagination',
    },
    currentPage: {
      control: 'number',
      description: 'Current active page',
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages',
    },
    onPageChange: {
      action: 'page changed',
      description: 'Callback when page is changed',
    },
  },
  render: createPagination,
};

export default meta;
type Story = StoryObj<PaginationArgs>;

export const White: Story = {
  args: {
    variant: 'white',
    currentPage: 1,
    totalPages: 10,
  },
};

export const Grey: Story = {
  args: {
    variant: 'grey',
    currentPage: 1,
    totalPages: 10,
  },
};

export const MiddlePages: Story = {
  args: {
    variant: 'white',
    currentPage: 5,
    totalPages: 10,
  },
};

export const LastPages: Story = {
  args: {
    variant: 'white',
    currentPage: 9,
    totalPages: 10,
  },
};
