import { TextArgs } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createText } from './Text';

const meta: Meta<TextArgs> = {
  title: 'Components (Atoms)/List/Text',
  tags: ['!autodocs'],
  parameters: {
    controls: { expanded: true },
    layout: 'padded',
    docs: {
      description: {
        component:
          'The Text List component provides a flexible way to display ordered lists, unordered lists, or a list of interactive links.    It supports optional titles and different styling variants to match various use cases.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['ordered', 'unordered', 'links'],
      description: 'Determines the visual style and behavior of the list',
      table: {
        category: ArgsCategory.PROPS,
        defaultValue: { summary: 'ordered' },
      },
    },
    title: {
      control: 'text',
      description: 'Optional heading text displayed above the list',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    items: {
      control: 'object',
      description: 'Array of items to display in the list. Can be simple text items or link items based on the variant.',
      table: {
        category: ArgsCategory.PROPS,
        type: { summary: 'TextItem[] | LinkItem[]' },
      },
    },
  },
  render: (args) => createText(args),
};
export default meta;
type Story = StoryObj<TextArgs>;

export const Ordered: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A numbered list with an optional title. Useful for sequential or prioritized content.',
      },
    },
  },
  args: {
    variant: 'ordered',
    title: 'Ordered List Title',
    items: [{ text: 'First item' }, { text: 'Second item' }, { text: 'Third item' }],
  },
};

export const OrderedWithoutTitle: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic numbered list without a title, showing the minimal required props.',
      },
    },
  },
  args: {
    variant: 'ordered',
    items: [{ text: 'First item' }, { text: 'Second item' }, { text: 'Third item' }],
  },
};

export const Unordered: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A bullet-point list with an optional title. Ideal for non-sequential related items.',
      },
    },
  },
  args: {
    variant: 'unordered',
    title: 'Unordered List Title',
    items: [{ text: 'First item' }, { text: 'Second item' }, { text: 'Third item' }],
  },
};

export const Links: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A list of interactive links with icons. Each link can be configured with different properties.',
      },
    },
  },
  args: {
    variant: 'links',
    title: 'Links List Title',
    items: [
      {
        label: 'First link',
        href: '#first',
        disabled: false,
        iconLeft: false,
        onClick: () => console.log('First link clicked'),
        icon: 'arrowRight',
      },
      {
        label: 'Second link',
        href: '#second',
        disabled: false,
        iconLeft: false,
        onClick: () => console.log('Second link clicked'),
        icon: 'arrowRight',
      },
      {
        label: 'Third link',
        href: '#third',
        disabled: false,
        iconLeft: false,
        onClick: () => console.log('Third link clicked'),
        icon: 'arrowRight',
      },
    ],
  },
};

export const LinksWithStates: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates different states of link items including active, disabled, and different icon positions.',
      },
    },
  },
  args: {
    variant: 'links',
    title: 'Links With Different States',
    items: [
      {
        label: 'Active link',
        href: '#active',
        disabled: false,
        onClick: () => console.log('Active clicked'),
        icon: 'arrowRight',
      },
      {
        label: 'Disabled link',
        href: '#disabled',
        disabled: true,
        onClick: () => console.log('Disabled clicked'),
        icon: 'arrowRight',
      },
      {
        label: 'Icon on left',
        href: '#left',
        disabled: false,
        iconLeft: true,
        onClick: () => console.log('Left icon clicked'),
        icon: 'arrowLeft',
      },
    ],
  },
};
