// Badge.stories.tsx
import type { Meta, StoryObj } from '@storybook/html';
import { expect, within } from '@storybook/test';
import { createBadge } from './Badge';
import { BadgeProps } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';

const meta: Meta<BadgeProps> = {
  title: 'Components (Atoms)/Badge',
  tags: ['!autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    a11y: {
      config: {
        rules: [
          { id: 'image-alt', enabled: true },
          { id: 'button-name', enabled: true },
        ],
      },
    },
    docs: {
      description: {
        component: 'A badge component that displays status or information.',
      },
    },
  },
  args: {
    badgeLabel: '-',
    size: 42,
    color: 'primary',
  },
  argTypes: {
    badgeLabel: {
      control: 'text',
      description: 'Text to display in the badge',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    size: {
      control: { type: 'number', min: 24, max: 64 },
      description: 'Size of the badge in pixels',
      type: { name: 'number', required: true },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '42' },
        category: ArgsCategory.PROPS,
      },
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Color variant of the badge',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
        category: ArgsCategory.PROPS,
      },
    },
    classNames: {
      control: 'text',
      description: 'Additional CSS classes to apply',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'No additional classes' },
        category: ArgsCategory.PROPS,
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers',
      type: { name: 'string', required: false },
      table: {
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
  },
  render: (args) => createBadge(args),
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    badgeLabel: 'Tipp',
    size: 42,
    color: 'primary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText('Tipp');
    const badgeContainer = badge.parentElement;

    // Visual tests
    await expect(badgeContainer).toHaveClass('bg-primary-interaction');
    await expect(badge).toHaveClass('font-bold');
    await expect(badge).toHaveClass('text-copy-small');

    // Size tests
    if (badgeContainer) {
      await expect(badgeContainer.style.minWidth).toBe('42px');
      await expect(badgeContainer.style.minHeight).toBe('42px');
    }
  },
};
