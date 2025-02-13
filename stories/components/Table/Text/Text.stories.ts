import type { Meta, StoryObj } from '@storybook/html';
import { TextArgs, createText } from './Text';

const meta: Meta<TextArgs> = {
    title: 'Components (Atoms)/Table/Text',

    parameters: {
        layout: 'padded',
    },
    argTypes: {
        rows: {
            description: 'Array of rows containing cells',
            control: 'object',
        },
    },
    render: (args) => createText(args),
};

export default meta;
type Story = StoryObj<TextArgs>;

export const Default: Story = {
    args: {
        rows: [
            [
                { content: 'Row 1, Column 1' },
                { content: 'Row 1, Column 2' },
            ],
            [
                { content: 'Row 2, Column 1' },
                { content: 'Row 2, Column 2' },
            ],
            [
                { content: 'Row 3, Column 1' },
                { content: 'Row 3, Column 2' },
            ],
            [
                { content: 'Row 4, Column 1' },
                { content: 'Row 4, Column 2' },
            ],
            [
                { content: 'Row 5, Column 1' },
                { content: 'Row 5, Column 2' },
            ],
        ],
    },
};

export const ThreeColumns: Story = {
    args: {
        rows: [
            [
                { content: 'Row 1, Column 1' },
                { content: 'Row 1, Column 2' },
                { content: 'Row 1, Column 3' },
            ],
            [
                { content: 'Row 2, Column 1' },
                { content: 'Row 2, Column 2' },
                { content: 'Row 2, Column 3' },
            ],
            [
                { content: 'Row 3, Column 1' },
                { content: 'Row 3, Column 2' },
                { content: 'Row 3, Column 3' },
            ],
            [
                { content: 'Row 4, Column 1' },
                { content: 'Row 4, Column 2' },
                { content: 'Row 4, Column 3' },
            ],
            [
                { content: 'Row 5, Column 1' },
                { content: 'Row 5, Column 2' },
                { content: 'Row 5, Column 3' },
            ],
        ],
    },
};
