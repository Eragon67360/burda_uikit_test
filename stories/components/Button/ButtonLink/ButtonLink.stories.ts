import type { Meta, StoryObj } from '@storybook/html';
import { IconCategory, IconRegistry } from '@/assets/icons';
import { ButtonLinkArgs, createButtonLink } from './ButtonLink';
import { fn } from '@storybook/test';
import { ArgsCategory } from '@/stories/types/story';
import { play } from './ButtonLink.tests';

const meta: Meta<ButtonLinkArgs> = {
  title: 'Components (Atoms)/Button/ButtonLink',

  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: 'The ButtonLink component is a versatile button that acts as a link. It supports various states.',
      },
    },
  },

  args: {
    label: 'Link Button',
    href: '#',
    target: '_self',
    icon: 'arrowRight',
    iconLeft: false,
    disabled: false,
    classNames: undefined,
    onClick: fn(),
  },

  argTypes: {
    label: {
      control: 'text',
      description: 'Label to be displayed on the button.',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    href: {
      control: 'text',
      description: 'URL to navigate to when the button is clicked. Alternatively, the action can be handled by the onClick function.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#' },
        category: ArgsCategory.PROPS,
      },
    },
    target: {
      control: 'select',
      options: ['_blank', '_self', '_parent', '_top'],
      description: 'Specifies where to open the linked document.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '_self' },
        category: ArgsCategory.PROPS,
      },
    },
    icon: {
      control: 'select',
      options: [undefined, ...Object.keys(IconRegistry[IconCategory.SYSTEM])],
      description: 'Icon to be displayed on the button. If not provided, no icon will be shown.',
      table: {
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
        category: ArgsCategory.PROPS,
      },
    },
    iconLeft: {
      control: 'boolean',
      description: 'Position of the icon. If true, the icon appears on the left side of the label. If false, it appears on the right.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    classNames: {
      control: 'text',
      description: 'Additional CSS classes for custom styling.',
      table: {
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
        category: ArgsCategory.PROPS,
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function triggered on button click. Can be used as an alternative to href for navigation.',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
        category: ArgsCategory.EVENTS,
      },
    },
  },

  render: (args) => createButtonLink(args),
  play,
};

export default meta;

type Story = StoryObj<ButtonLinkArgs>;

export const WithRightIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};

export const WithLeftIcon: Story = {
  args: {
    icon: 'arrowLeft',
    iconLeft: true,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};

export const WithoutIcon: Story = {
  args: {
    icon: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
