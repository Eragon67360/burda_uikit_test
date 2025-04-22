import type { Meta, StoryObj } from '@storybook/html';
import { createCartAndPay, CartAndPayArgs } from './CartAndPay';
import { IconRegistry, IconCategory } from '@/stories/assets/icons';
import { fn } from '@storybook/test';
import { ArgsCategory } from '@/stories/types/story';

const meta: Meta<CartAndPayArgs> = {
  title: 'Components (Atoms)/Button/CartAndPay',

  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
    controls: { expanded: true },
    docs: {
      description: {
        component: 'A button component designed for cart and payment actions, featuring an icon and optional item count.',
      },
    },
  },

  args: {
    label: 'Cart & Pay',
    icon: 'cart',
    disabled: false,
    items: [],
    classNames: undefined,
    onClick: fn(),
    ariaLabelCartCount: `You have 0 items in your cart`,
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
    items: {
      control: 'object',
      description: 'Array of items associated with the cart and pay action. Number of items will be displayed on the button.',
      table: {
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
      description: 'Callback function triggered on button click.',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
        category: ArgsCategory.EVENTS,
      },
    },
    ariaLabelCartCount: {
      control: 'text',
      description: 'Aria label for the cart count, providing accessibility information about the number of items in the cart.',
      table: {
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
  },
  render: (args) => createCartAndPay(args),
};

export default meta;
type Story = StoryObj<CartAndPayArgs>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default button with cart icon and no items.',
      },
    },
  },
};

export const WithItems: Story = {
  args: {
    items: [1, 2, 3],
    ariaLabelCartCount: 'You have 3 items in your cart',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with cart icon and 3 items.',
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
        story: 'Disabled button, preventing user interaction.',
      },
    },
  },
};

export const DisabledWithItems: Story = {
  args: {
    items: [1, 2],
    disabled: true,
    ariaLabelCartCount: 'You have 2 items in your cart',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled button with cart icon and 2 items.',
      },
    },
  },
};

export const CustomIcon: Story = {
  args: {
    label: 'Help',
    icon: 'help',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with a custom icon.',
      },
    },
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'Proceed to Payment',
    items: [1],
    ariaLabelCartCount: 'You have 1 item in your cart',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with a custom label and 1 item.',
      },
    },
  },
};
