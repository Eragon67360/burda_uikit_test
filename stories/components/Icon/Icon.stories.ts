// components/Icon/Icon.stories.ts

import type { Meta, StoryObj } from '@storybook/html';
import { createIcon, IconProps } from './Icon';
import { IconRegistry, IconCategory } from '@/assets/icons';

const meta: Meta<IconProps> = {
    title: 'Components (Atoms)/Icon',

    parameters: {
        layout: 'centered',
    },
    argTypes: {
        name: {
            control: 'select',
            options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
            description: 'The name of the icon to display'
        },
        size: {
            control: { type: 'number', min: 12, max: 64 },
            description: 'Size of the icon in pixels'
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes'
        }
    },
    render: (args) => createIcon(args)
};

export default meta;
type Story = StoryObj<IconProps>;

export const Default: Story = {
    args: {
        name: 'headphones',
        size: 20
    }
};

export const Large: Story = {
    args: {
        name: 'headphones',
        size: 40
    }
};

export const WithCustomClass: Story = {
    args: {
        name: 'document',
        size: 24,
        className: 'text-blue-500'
    }
};
