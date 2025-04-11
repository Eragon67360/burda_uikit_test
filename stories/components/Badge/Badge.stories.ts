// Badge.stories.tsx
import type { Meta, StoryObj } from '@storybook/html';
import { expect, within } from '@storybook/test';
import { createBadge } from './Badge';

const meta: Meta = {
  title: 'Components (Atoms)/Badge',
  tags: ['autodocs'],
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
  argTypes: {
    badgeLabel: {
      control: 'text',
      description: 'Text to display in the badge',
    },
    size: {
      control: 'number',
      description: 'Size of the badge in pixels',
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Color variant of the badge',
    },
  },
  render: (args) => createBadge(args.badgeLabel, args.size, args.color),
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
