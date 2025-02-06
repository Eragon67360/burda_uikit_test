import type { Meta, StoryObj } from '@storybook/html';
import { createText, TextArgs } from './Text';

const meta: Meta<TextArgs> = {
    title: 'Components/List/Text',
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: ['ordered', 'unordered', 'links'],
            description: 'The style variant of the list',
        },
        title: {
            control: 'text',
            description: 'Optional title for the list',
        },
        items: {
            control: 'object',
            description: 'Array of items to display in the list',
        },
    },
    render: (args) => createText(args),
};

export default meta;
type Story = StoryObj<TextArgs>;

export const Ordered: Story = {
    args: {
        variant: 'ordered',
        title: 'Ordered List Title',
        items: [
            { text: 'First item' },
            { text: 'Second item' },
            { text: 'Third item' },
        ],
    },
};

export const OrderedWithoutTitle: Story = {
    args: {
        variant: 'ordered',
        items: [
            { text: 'First item' },
            { text: 'Second item' },
            { text: 'Third item' },
        ],
    },
};

export const Unordered: Story = {
    args: {
        variant: 'unordered',
        title: 'Unordered List Title',
        items: [
            { text: 'First item' },
            { text: 'Second item' },
            { text: 'Third item' },
        ],
    },
};


export const Links: Story = {
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
                icon: 'arrowRight'
            },
            {
                label: 'Second link',
                href: '#second',
                disabled: false,
                iconLeft: false,
                onClick: () => console.log('Second link clicked'),
                icon: 'arrowRight'
            },
            {
                label: 'Third link',
                href: '#third',
                disabled: false,
                iconLeft: false,
                onClick: () => console.log('Third link clicked'),
                icon: 'arrowRight'
            },
        ],
    },
};

export const LinksWithStates: Story = {
    args: {
        variant: 'links',
        title: 'Links With Different States',
        items: [
            {
                label: 'Active link',
                href: '#active',
                disabled: false,
                onClick: () => console.log('Active clicked'),
                icon: 'arrowRight'
            },
            {
                label: 'Disabled link',
                href: '#disabled',
                disabled: true,
                onClick: () => console.log('Disabled clicked'),
                icon: 'arrowRight'
            },
            {
                label: 'Icon on left',
                href: '#left',
                disabled: false,
                iconLeft: true,
                onClick: () => console.log('Left icon clicked'),
                icon: 'arrowLeft'
            },
        ],
    },
};