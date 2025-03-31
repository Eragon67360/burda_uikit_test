import type { Meta, StoryObj } from '@storybook/html';
import { createCartAndPay, CartAndPayArgs } from './CartAndPay';
import { IconRegistry, IconCategory } from '@/stories/assets/icons';

const meta: Meta<CartAndPayArgs> = {
    title: 'Components (Atoms)/Button/CartAndPay',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light'
        }
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Text label for the button',
            defaultValue: 'Cart & Pay'
        },
        icon: {
            control: 'select',
            options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
            description: 'Icon to display on the button',
            defaultValue: 'cart'
        },
        disabled: {
            control: 'boolean',
            description: 'Disable the button interaction',
            defaultValue: false
        },
        items: {
            control: 'object',
            description: 'Array of items to show badge count',
            defaultValue: []
        },
        onClick: {
            action: 'clicked',
            description: 'Optional click handler'
        },
        classNames: {
            control: 'text',
            description: 'Additional CSS classes',
            defaultValue: ''
        }
    },
    render: (args) => createCartAndPay(args)
};

export default meta;
type Story = StoryObj<CartAndPayArgs>;

export const Default: Story = {
    args: {
        label: 'Cart & Pay',
        icon: 'cart',
        items: [],
        disabled: false
    },
    name: 'Default Button'
};

export const WithItems: Story = {
    args: {
        label: 'Cart & Pay',
        icon: 'cart',
        items: [1, 2, 3],  // Simulating 3 items
        disabled: false
    },
    name: 'Button with Items'
};

export const Disabled: Story = {
    args: {
        label: 'Cart & Pay',
        icon: 'cart',
        items: [],
        disabled: true
    },
    name: 'Disabled Button'
};

export const DisabledWithItems: Story = {
    args: {
        label: 'Cart & Pay',
        icon: 'cart',
        items: [1, 2],
        disabled: true
    },
    name: 'Disabled Button with Items'
};

export const CustomIcon: Story = {
    args: {
        label: 'Help',
        icon: 'help',
        items: [],
        disabled: false
    },
    name: 'Button with Help Icon'
};

export const CustomLabel: Story = {
    args: {
        label: 'Proceed to Payment',
        icon: 'cart',
        items: [1],
        disabled: false
    },
    name: 'Button with Custom Label'
};
