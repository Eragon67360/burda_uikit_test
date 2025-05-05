import { TableTextArgs } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createText } from './Text';

const meta: Meta<TableTextArgs> = {
  title: 'Components (Atoms)/Table/Text',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A simple table component that displays text content in a structured grid format. The first column is styled differently to act as a header or label column.',
      },
    },
  },
  argTypes: {
    rows: {
      description: 'Array of rows containing cells. Each row is an array of cell objects with content property.',
      control: 'object',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
  },
  render: (args) => createText(args),
};

export default meta;
type Story = StoryObj<TableTextArgs>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Basic two-column table layout with multiple rows. The first column is styled as a header column with bold text.',
      },
    },
  },
  args: {
    rows: [
      [{ content: 'Row 1, Column 1' }, { content: 'Row 1, Column 2' }],
      [{ content: 'Row 2, Column 1' }, { content: 'Row 2, Column 2' }],
      [{ content: 'Row 3, Column 1' }, { content: 'Row 3, Column 2' }],
      [{ content: 'Row 4, Column 1' }, { content: 'Row 4, Column 2' }],
      [{ content: 'Row 5, Column 1' }, { content: 'Row 5, Column 2' }],
    ],
  },
};

export const ThreeColumns: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Three-column table layout demonstrating the flexibility of the component to handle different column counts.',
      },
    },
  },
  args: {
    rows: [
      [{ content: 'Row 1, Column 1' }, { content: 'Row 1, Column 2' }, { content: 'Row 1, Column 3' }],
      [{ content: 'Row 2, Column 1' }, { content: 'Row 2, Column 2' }, { content: 'Row 2, Column 3' }],
      [{ content: 'Row 3, Column 1' }, { content: 'Row 3, Column 2' }, { content: 'Row 3, Column 3' }],
      [{ content: 'Row 4, Column 1' }, { content: 'Row 4, Column 2' }, { content: 'Row 4, Column 3' }],
      [{ content: 'Row 5, Column 1' }, { content: 'Row 5, Column 2' }, { content: 'Row 5, Column 3' }],
    ],
  },
};
