import type { Meta, StoryObj } from '@storybook/html';
import { createTextbox, TextboxArgs } from './Textbox';

const meta: Meta<TextboxArgs> = {
    title: 'Components (Atoms)/List/Accordion/Textbox',

    parameters: {
        layout: 'centered',
    },
    argTypes: {
        expandText: {
            control: 'text',
            description: 'Text shown when content is collapsed',
            defaultValue: 'See more'
        },
        collapseText: {
            control: 'text',
            description: 'Text shown when content is expanded',
            defaultValue: 'See less'
        },
        content: {
            control: 'text',
            description: 'Content to be shown/hidden',
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes',
        },
        chevronIcon: {
            control: 'text',
            description: 'Icon to replace the chevron',
        },
    },
    render: (args) => createTextbox(args as any)
};

export default meta;
type Story = StoryObj<TextboxArgs>;

export const Default: Story = {
    args: {
        expandText: 'See more',
        collapseText: 'See less',
        content: `
        <p class="text-gray-700">
            This is the expandable content. It can contain any HTML content.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        `,
    },
};

export const CustomText: Story = {
    args: {
        expandText: 'Show details',
        collapseText: 'Hide details',
        content: `
        <div class="space-y-4">
            <p class="text-gray-700">Custom content with different expand/collapse text.</p>
            <ul class="list-disc list-inside">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            </ul>
        </div>
        `,
    },
};
