import type { Meta, StoryObj } from '@storybook/html';
import { createButtonIcon, ButtonIconArgs, ButtonIconVariant } from './ButtonIcon';
import { IconCategory, IconRegistry } from '@/assets/icons';
import { fn } from '@storybook/test';
import { play } from './ButtonIcon.test';
import { ArgsCategory } from '@/stories/types/story';

const meta: Meta<ButtonIconArgs> = {
  title: 'Components (Atoms)/Button/ButtonIcon',
  tags: ['!autodocs'],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'The ButtonIcon component is a versatile button that displays an icon. It supports various states and can be customized for accessibility.',
      },
    },
  },

  args: {
    variant: ButtonIconVariant.SMALL,
    icon: 'trash',
    disabled: false,
    backgroundColor: 'neutral-100',
    onClick: fn(),
    ariaLabel: 'Sample icon button',
  },

  argTypes: {
    variant: {
      control: 'radio',
      options: Object.values(ButtonIconVariant),
      description: 'Defines the size variant of the button icon.',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    icon: {
      control: 'select',
      options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
      description: 'Icon to be displayed on the button.',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button, preventing user interaction.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: ArgsCategory.PROPS,
      },
    },
    backgroundColor: {
      control: 'radio',
      options: ['neutral-100', 'neutral-200'],
      description: 'Background color of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'neutral-100' },
        category: ArgsCategory.PROPS,
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function triggered on button click.',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
        category: ArgsCategory.EVENTS,
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the button icon. This is important for screen readers.',
      table: {
        type: { summary: 'string' },
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
  },

  render: (args) => createButtonIcon(args),
  play,
};

export default meta;
type Story = StoryObj<ButtonIconArgs>;

export const Small: Story = {
  args: {},
};

export const Big: Story = {
  args: {
    variant: ButtonIconVariant.BIG,
    ariaLabel: 'Sample big icon button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    ariaLabel: 'Disabled icon button',
  },
};
