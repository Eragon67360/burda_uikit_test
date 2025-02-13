import type { Meta, StoryObj } from '@storybook/html';
import { createButtonIcon, ButtonIconArgs, ButtonIconVariant } from './ButtonIcon';
import { IconCategory, IconRegistry } from '../../../assets/icons';

const meta: Meta<ButtonIconArgs> = {
    title: 'Components (Atoms)/Button/ButtonIcon',

    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: Object.values(ButtonIconVariant),
            description: 'Size variant of the button',
            table: {
                type: { summary: 'ButtonIconVariant' },
                defaultValue: { summary: ButtonIconVariant.SMALL },
            },
        },
        backgroundColor: {
            control: 'radio',
            options: ['neutral-100', 'neutral-200'],
            description: 'Background color of the button',
            table: {
                type: { summary: 'BackgroundColor' },
                defaultValue: { summary: 'neutral-100' },
            }
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled',
            defaultValue: false
        },
        ariaLabel: {
            control: 'text',
            description: 'Accessible label for the button',
            table: {
                type: { summary: 'string' },
                category: 'Accessibility',
            },
        },
        onClick: {
            action: 'clicked',
            description: 'Optional click handler',
            table: {
                category: 'Events',
                type: { summary: 'function' },
            },
        },
        icon: {
            control: { type: 'select' },
            options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
            description: 'Select an icon',
        },
    },
    render: (args) => createButtonIcon(args as any)
};

export default meta;
type Story = StoryObj<ButtonIconArgs>;

export const Small: Story = {
    args: {
        variant: ButtonIconVariant.SMALL,
        disabled: false,
        ariaLabel: 'Icon button',
        icon: 'trash'
    },
};

export const Big: Story = {
    args: {
        variant: ButtonIconVariant.BIG,
        disabled: false,
        ariaLabel: 'Icon button',
    },
};

export const Disabled: Story = {
    args: {
        variant: ButtonIconVariant.SMALL,
        disabled: true,
        ariaLabel: 'Icon button',
    },
};