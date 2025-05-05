// InfoTag.stories.ts
import type { Meta, StoryObj } from '@storybook/html';
import { createInfoTag } from './InfoTag';
import { InfoTagArgs } from '@/stories/types/infoTag.type';

const meta: Meta<InfoTagArgs> = {
  title: 'Components (Atoms)/InfoTag',
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: 'InfoTag is a simple informational component used to display short, important messages or status information.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Text content to be displayed within the tag',
      table: {
        defaultValue: { summary: 'none' },
      },
    },
  },
  render: (args) => createInfoTag(args),
};

export default meta;
type Story = StoryObj<InfoTagArgs>;

export const Default: Story = {
  args: {
    label: 'ab 3,40 € pro Ausgabe',
  },
};

export const ShortText: Story = {
  args: {
    label: 'In Stock',
  },
};

export const LongText: Story = {
  args: {
    label: 'Limited time offer: Special discount applies',
  },
};
