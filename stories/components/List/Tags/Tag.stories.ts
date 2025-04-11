import type { Meta, StoryObj } from '@storybook/html';
import { createTag, createTagGroup, TagArgs } from './Tag';

const meta: Meta<TagArgs> = {
  title: 'Components (Atoms)/List/Tags',

  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The text content of the tag',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the check icon',
      defaultValue: true,
    },
  },
  render: (args) => createTag(args as any),
};

export default meta;
type Story = StoryObj<TagArgs>;

export const SingleTagDesktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
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
