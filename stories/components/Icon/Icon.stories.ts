import type { Meta, StoryObj } from '@storybook/html';
import { createIcon, IconArgs } from './Icon';
import { IconRegistry, IconCategory } from '@/assets/icons';
import { ArgsCategory } from '@/stories/types/story';
import { play } from './Icon.tests';

const meta: Meta<IconArgs> = {
  title: 'Components (Atoms)/Icon',

  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'The Icon component is a versatile and reusable component that displays SVG icons. It supports various attributes for customization and accessibility.',
      },
    },
  },

  args: {
    name: 'headphones',
    size: 20,
    classNames: undefined,
    role: undefined,
    ariaLabel: undefined,
    focusable: false,
    ariaHidden: false,
  },

  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
      description: 'The name of the icon to display',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    size: {
      control: { type: 'number', min: 12, max: 64 },
      description: 'Size of the icon in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '20' },
        category: ArgsCategory.PROPS,
      },
    },
    classNames: {
      control: 'text',
      description: 'Additional CSS classes for custom styling.',
      table: {
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
        category: ArgsCategory.PROPS,
      },
    },
    role: {
      control: 'text',
      description:
        'ARIA role for the icon element. If set to "img", it will be treated as an image and ariaLabel is required for accessibility.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'img' },
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the icon. If role is "img", this is required.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
    focusable: {
      control: 'boolean',
      description: 'Whether the icon is focusable. If ariaHidden is true, this will be ignored.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
    ariaHidden: {
      control: 'boolean',
      description: 'Whether the icon is hidden from assistive technologies',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
  },

  render: (args) => createIcon(args),
  play,
};

export default meta;
type Story = StoryObj<IconArgs>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 40,
  },
};

export const WithCustomClass: Story = {
  args: {
    name: 'document',
    size: 24,
    classNames: 'text-blue-500',
  },
};
