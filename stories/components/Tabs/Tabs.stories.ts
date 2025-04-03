import type { Meta, StoryObj } from '@storybook/html';
import { TabsArgs, createTabs } from './Tabs';

const meta: Meta<TabsArgs> = {
    title: 'Components (Atoms)/Tabs',

    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['plain', 'outline'],
        },
        background: {
            control: 'select',
            options: ['white', 'gray'],
        },
        hasContent: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        selectedId: {
            control: 'text',
        },
    },
    render: (args) => createTabs(args),
};

export default meta;
type Story = StoryObj<TabsArgs>;

export const SimpleSelection: Story = {
    args: {
        items: [
            { id: 'mr', label: 'Mr' },
            { id: 'ms', label: 'Ms' },
            { id: 'other', label: 'Other' },
        ],
        variant: 'plain',
        background: 'white',
        hasContent: false,
        disabled: false,
    },
};

export const Outlined: Story = {
    args: {
        ...SimpleSelection.args,
        variant: 'outline',
    },
};

export const GrayBackground: Story = {
    parameters: {
        backgrounds: {
            default: 'White',
        },
    },
    args: {
        ...SimpleSelection.args,
        background: 'gray',
    },
};

export const Disabled: Story = {
    args: {
        ...SimpleSelection.args,
        disabled: true,
    },
};

export const DisabledOutlined: Story = {
    args: {
        ...SimpleSelection.args,
        variant: 'outline',
        disabled: true,
    },
};

export const WithContent: Story = {
    args: {
        items: [
            {
                id: 'tab1',
                label: 'Tab 1',
                content: '<p>This is the content for Tab 1. It can include <strong>bold text</strong>, <em>italic text</em>, and even <a href="#">links</a>.</p>',
            },
            {
                id: 'tab2',
                label: 'Tab 2',
                content: '<p>Tab 2 content with a <button class="bg-transparent font-bold ">Link button -></button> and other elements.</p>',
            },
            {
                id: 'tab3',
                label: 'Tab 3',
                content: '<p>Content for Tab 3 with a list:</p><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>',
            },
        ],
        variant: 'plain',
        background: 'white',
        hasContent: true,
        disabled: false,
    },
};
