import { FAQArgs } from '@/stories/types/accordionFAQ.type';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createFAQ } from './FAQ';

const meta: Meta<FAQArgs> = {
  title: 'Components (Atoms)/List/Accordion/FAQ',
  tags: ['!autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An accessible FAQ accordion component that allows users to expand/collapse question-answer pairs. Supports multiple items, different background colors, and implements proper accessibility features.',
      },
    },
    backgrounds: {
      default: 'Gray',
    },
  },
  argTypes: {
    backgroundColor: {
      control: 'radio',
      options: ['white', 'gray'],
      description: 'Background color variant of the FAQ component',
      defaultValue: 'white',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    items: {
      control: 'object',
      description: 'Array of accordion items, each containing a trigger (question) and content (answer)',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
  },
  render: (args) => createFAQ(args),
};

export default meta;
type Story = StoryObj<FAQArgs>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default implementation of the FAQ component with white background and multiple questions.',
      },
    },
    backgrounds: {
      default: 'Gray',
    },
  },
  args: {
    backgroundColor: 'white',
    items: [
      {
        trigger: 'What is your return policy?',
        content: 'Our return policy allows returns within 30 days of purchase with original receipt.',
      },
      {
        trigger: 'How do I track my order?',
        content:
          'You can track your order by logging into your account or using the tracking number provided in your shipping confirmation email.',
      },
      {
        trigger: 'Do you ship internationally?',
        content: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.',
      },
    ],
  },
};

export const Gray: Story = {
  parameters: {
    docs: {
      description: {
        story: 'FAQ component with gray background color variant.',
      },
    },
    backgrounds: {
      default: 'White',
    },
  },
  args: {
    backgroundColor: 'gray',
    items: [
      {
        trigger: 'What is your return policy?',
        content: 'Our return policy allows returns within 30 days of purchase with original receipt.',
      },
      {
        trigger: 'How do I track my order?',
        content:
          'You can track your order by logging into your account or using the tracking number provided in your shipping confirmation email.',
      },
      {
        trigger: 'Do you ship internationally?',
        content: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.',
      },
    ],
  },
};

export const SingleItem: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Example of FAQ component with a single accordion item.',
      },
    },
    backgrounds: {
      default: 'Gray',
    },
  },
  args: {
    items: [
      {
        trigger: 'Single Accordion Item',
        content: 'This is the content for a single accordion item.',
      },
    ],
  },
};
