import type { Meta, StoryObj } from '@storybook/html';
import { createFooter, FooterArgs } from './Footer';

const meta: Meta<FooterArgs> = {
    title: 'Components (Organisms)/Footer',
    tags: ['autodocs'],
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {

    },
    render: (args) => createFooter(args as any)
};

export default meta;
type Story = StoryObj<FooterArgs>;

export const Footer1: Story = {
    args: {
    }
};
