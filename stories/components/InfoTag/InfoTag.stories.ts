import type { Meta, StoryObj } from '@storybook/html';
import { createInfoTag, InfoTagArgs } from './InfoTag';

const meta: Meta<InfoTagArgs> = {
    title: 'Components (Atoms)/InfoTag',
    tags: ['autodocs'],
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Tag label',
        },
    },
    render: (args) => createInfoTag(args as any)
};

export default meta;
type Story = StoryObj<InfoTagArgs>;

export const InfoTag1: Story = {
    args: {
        label: 'ab 3,40 € pro Ausgabe'
    }
};
