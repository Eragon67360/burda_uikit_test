import { TextboxArgs } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createTextbox } from './Textbox';

const meta: Meta<TextboxArgs> = {
  title: 'Components (Atoms)/List/Accordion/Textbox',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An accessible expandable/collapsible textbox component that allows users to show/hide content with smooth animations. Includes proper ARIA attributes and keyboard navigation support.',
      },
    },
  },
  argTypes: {
    expandText: {
      control: 'text',
      description: 'Text shown when content is collapsed',
      defaultValue: 'See more',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    collapseText: {
      control: 'text',
      description: 'Text shown when content is expanded',
      defaultValue: 'See less',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    content: {
      control: 'text',
      description: 'HTML content to be shown/hidden',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for styling',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    chevronIcon: {
      control: 'text',
      description: 'Custom SVG icon to replace the default chevron',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
  },
  render: (args) => createTextbox(args),
};

export default meta;
type Story = StoryObj<TextboxArgs>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Basic implementation of the textbox component with default expand/collapse text and simple content.',
      },
    },
  },
  args: {
    expandText: 'See more',
    collapseText: 'See less',
    content: `
        <p class="text-gray-700">
            This is the expandable content. It can contain any HTML content.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        `,
  },
};

export const CustomText: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Example with custom expand/collapse text and structured content including a list.',
      },
    },
  },
  args: {
    expandText: 'Show details',
    collapseText: 'Hide details',
    content: `
        <div class="space-y-4">
            <p class="text-gray-700">Custom content with different expand/collapse text.</p>
            <ul class="list-disc list-inside">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            </ul>
        </div>
        `,
  },
};
