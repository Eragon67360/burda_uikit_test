import type { Meta, StoryObj } from '@storybook/html';
import { createFAQ, FAQArgs } from './FAQ';

const meta: Meta<FAQArgs> = {
    title: 'Components/List/Accordion/FAQ',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        backgroundColor: {
            control: 'radio',
            options: ['white', 'gray'],
            description: 'Background color of the FAQ wrapper',
            defaultValue: 'white',
        },
        items: {
            control: 'object',
            description: 'Array of accordion items with trigger and content',
        },
    },
    render: (args) => createFAQ(args),
};

export default meta;
type Story = StoryObj<FAQArgs>;

export const Default: Story = {
    args: {
        backgroundColor: 'white',
        items: [
            {
                trigger: 'What is your return policy?',
                content: 'Our return policy allows returns within 30 days of purchase with original receipt.',
            },
            {
                trigger: 'How do I track my order?',
                content: 'You can track your order by logging into your account or using the tracking number provided in your shipping confirmation email.',
            },
            {
                trigger: 'Do you ship internationally?',
                content: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.',
            },
        ],
    },
};

export const Gray: Story = {
    args: {
        backgroundColor: 'gray',
        items: [
            {
                trigger: 'What is your return policy?',
                content: 'Our return policy allows returns within 30 days of purchase with original receipt.',
            },
            {
                trigger: 'How do I track my order?',
                content: 'You can track your order by logging into your account or using the tracking number provided in your shipping confirmation email.',
            },
            {
                trigger: 'Do you ship internationally?',
                content: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.',
            },
        ],
    },
};
export const SingleItem: Story = {
    args: {
        items: [
            {
                trigger: 'Single Accordion Item',
                content: 'This is the content for a single accordion item.',
            },
        ],
    },
};
