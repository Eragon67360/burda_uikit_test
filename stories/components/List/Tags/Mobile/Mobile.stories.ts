import type { Meta, StoryObj } from '@storybook/html';
import { MobileTagArgs, createMobileTag, createMobileTagGroup } from './Mobile';

const meta: Meta<MobileTagArgs> = {
    title: 'Components (Atoms)/List/Tags/Mobile',

    parameters: {
        layout: 'centered',
        viewport: {
            defaultViewport: 'mobile1'
        }
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
    render: (args) => createMobileTag(args as any)
};

export default meta;
type Story = StoryObj<MobileTagArgs>;

export const MobileSingleTag: Story = {
    args: {
        text: 'Sample Tag',
        showIcon: true,
    },
};

export const MobileTagGroup: Story = {
    render: () => createMobileTagGroup([
        { text: 'First Tag', showIcon: true },
        { text: 'Second Tag', showIcon: false },
        { text: 'Third Tag', showIcon: true },
        { text: 'Fourth Tag', showIcon: true },
        { text: 'Fifth Tag', showIcon: true },
        { text: 'Sixth Tag', showIcon: false },
    ], 0),
};
