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
            { text: 'First link', href: '#first' },
            { text: 'Second link', href: '#second' },
            { text: 'Third link', href: '#third' },
        ],
    },
};