import { TagArgs } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createTag, createTagGroup } from './Tag';

const meta: Meta<TagArgs> = {
  title: 'Components (Atoms)/List/Tags',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Tags are visual indicators used to categorize, filter, or highlight content. They can be displayed individually or in groups, with optional icons for enhanced visual feedback.',
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The text content of the tag',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the check icon',
      defaultValue: true,
      table: {
        category: ArgsCategory.PROPS,
      },
    },
  },
  render: (args) => createTag(args),
};

export default meta;
type Story = StoryObj<TagArgs>;

export const SingleTagDesktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    docs: {
      description: {
        story: 'Single tag component displayed in desktop viewport with default styling and optional icon.',
      },
    },
  },
  args: {
    text: 'Sample Tag',
    showIcon: true,
  },
};

export const SingleTagMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Single tag component optimized for mobile viewport with responsive padding and spacing.',
      },
    },
  },
  args: {
    text: 'Sample Tag',
    showIcon: true,
  },
};

export const TagGroupDesktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    docs: {
      description: {
        story: 'Multiple tags displayed in a wrapped layout for desktop viewports, demonstrating various configurations.',
      },
    },
  },
  render: () =>
    createTagGroup([
      { text: 'First Tag', showIcon: true },
      { text: 'Second Tag', showIcon: false },
      { text: 'Third Tag', showIcon: true },
      { text: 'Fourth Tag', showIcon: true },
      { text: 'Fifth Tag', showIcon: true },
      { text: 'Sixth Tag', showIcon: false },
      { text: 'Seventh Tag', showIcon: true },
    ]),
};

export const TagGroupMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Multiple tags in a horizontally scrollable container for mobile viewports.',
      },
    },
  },
  render: () =>
    createTagGroup([
      { text: 'First Tag', showIcon: true },
      { text: 'Second Tag', showIcon: false },
      { text: 'Third Tag', showIcon: true },
      { text: 'Fourth Tag', showIcon: true },
      { text: 'Fifth Tag', showIcon: true },
      { text: 'Sixth Tag', showIcon: false },
      { text: 'Seventh Tag', showIcon: true },
    ]),
};
