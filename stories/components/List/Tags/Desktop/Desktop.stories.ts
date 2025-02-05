import type { Meta, StoryObj } from '@storybook/html';
import { createDesktopTag, createTagGroup, DesktopTagArgs } from './Desktop';

const meta: Meta<DesktopTagArgs> = {
    title: 'Components/List/Tags/Desktop',
    tags: ['autodocs'],
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        text: {
            control: 'text',
            description: 'The text content of the tag',
        },
        showIcon: {
            control: 'boolean',
            description: 'Whether to show the check icon',
            defaultValue: true,
        },
    },
    render: (args) => createDesktopTag(args as any)
};

export default meta;
type Story = StoryObj<DesktopTagArgs>;

export const SingleTag: Story = {
    args: {
        text: 'Sample Tag',
        showIcon: true,
    },
};

export const TagGroup: Story = {
    render: () => createTagGroup([
        { text: 'First Tag', showIcon: true },
        { text: 'Second Tag', showIcon: false },
        { text: 'Third Tag', showIcon: true },
        { text: 'Fourth Tag', showIcon: true },
        { text: 'Fifth Tag', showIcon: true },
        { text: 'Sixth Tag', showIcon: false },
        { text: 'Seventh Tag', showIcon: true },
    ]),
};