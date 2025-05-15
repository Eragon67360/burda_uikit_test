// Badge.stories.tsx
import { BadgeProps } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createBadge } from './Badge';

const meta: Meta<BadgeProps> = {
  title: 'Components (Atoms)/Badge',
  tags: ['!autodocs'],
  parameters: {
    layout: 'padded',
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
};

// Adding to your existing Badge.stories.tsx

export const Secondary: Story = {
  args: {
    badgeLabel: 'New',
    size: 42,
    color: 'secondary',
  },
};

export const Small: Story = {
  args: {
    badgeLabel: '1',
    size: 24,
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    badgeLabel: '99+',
    size: 64,
    color: 'primary',
  },
};

export const WithCustomClasses: Story = {
  args: {
    badgeLabel: '!',
    size: 42,
    color: 'primary',
    classNames: 'translate-x-1/2 translate-y-1/2',
  },
};

export const WithAriaLabel: Story = {
  args: {
    badgeLabel: '5',
    size: 42,
    color: 'primary',
    ariaLabel: 'Five unread messages',
  },
};

export const EmptyBadge: Story = {
  args: {
    badgeLabel: '',
    size: 42,
    color: 'secondary',
  },
};

export const LongText: Story = {
  args: {
    badgeLabel: 'Long Text',
    size: 42,
    color: 'primary',
  },
};

export const NumberBadge: Story = {
  args: {
    badgeLabel: '42',
    size: 42,
    color: 'primary',
    ariaLabel: '42 items in cart',
  },
};

export const StatusBadge: Story = {
  args: {
    badgeLabel: '✓',
    size: 42,
    color: 'secondary',
    ariaLabel: 'Status: Complete',
  },
};
