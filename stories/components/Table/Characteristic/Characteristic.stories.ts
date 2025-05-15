import { IconCategory, IconRegistry } from '@/assets/icons';
import { TableCharacteristicArgs } from '@/stories/types';
import type { Meta, StoryObj } from '@storybook/html';
import { createCharacteristic } from './Characteristic';
import { ArgsCategory } from '@/stories/types/story';

const meta: Meta<TableCharacteristicArgs> = {
  title: 'Components (Atoms)/Table/Characteristic',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A characteristic table component that supports both text and icon content. Features alternating row backgrounds, styled headers, and centered content alignment for non-first columns.',
      },
    },
  },
  argTypes: {
    headers: {
      description: 'Array of column header labels that define the table structure.',
      control: 'object',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    rows: {
      description: 'Array of rows containing cells. Each cell can contain text or an icon.',
      control: 'object',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
  },
  render: (args) => createCharacteristic(args),
};

export default meta;
type Story = StoryObj<TableCharacteristicArgs>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Basic characteristic table with text-only content. Shows alternating row backgrounds and different column alignments.',
      },
    },
  },
  args: {
    headers: ['Table', 'Dolor', 'Sit amet', 'Momentum sit'],
    rows: [
      [{ content: 'First Item' }, { content: 'Value 1' }, { content: 'Value 2' }, { content: 'Faucibus morbi augue tempor elementum' }],
      [{ content: 'Second Item' }, { content: 'Value 2' }],
    ],
  },
};

export const WithIcons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Characteristic table demonstrating icon integration alongside text content. Icons are automatically sized and centered.',
      },
    },
  },
  args: {
    headers: ['Table', 'Dolor', 'Sit amet', 'Momentum sit'],
    rows: [
      [
        { content: 'Feature 1' },
        { content: IconRegistry[IconCategory.SYSTEM].cancel, isIcon: true },
        { content: 'Available' },
        { content: 'Faucibus morbi augue tempor elementum' },
      ],
      [{ content: 'Feature 2' }, { content: IconRegistry[IconCategory.SYSTEM].success, isIcon: true }, { content: 'Not Available' }],
    ],
  },
};
