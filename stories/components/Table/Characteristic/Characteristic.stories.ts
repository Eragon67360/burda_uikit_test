import type { Meta, StoryObj } from '@storybook/html';
import { CharacteristicArgs, createCharacteristic } from './Characteristic';
import { IconCategory, IconRegistry } from '../../../assets/icons';

const meta: Meta<CharacteristicArgs> = {
    title: 'Components/Table/Characteristic',
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        headers: {
            description: 'Array of column headers',
            control: 'object',
        },
        rows: {
            description: 'Array of rows containing cells',
            control: 'object',
        },
    },
    render: (args) => createCharacteristic(args),
};

export default meta;
type Story = StoryObj<CharacteristicArgs>;

export const Default: Story = {
    args: {
        headers: ['Table', 'Dolor', 'Sit amet', 'Momentum sit'],
        rows: [
            [
                { content: 'First Item' },
                { content: 'Value 1' },
                { content: 'Value 2' },
                { content: 'Faucibus morbi augue tempor elementum' },
            ],
            [
                { content: 'Second Item' },
                { content: 'Value 2' },
            ],
        ],
    },
};

export const WithIcons: Story = {
    args: {
        headers: ['Table', 'Dolor', 'Sit amet', 'Momentum sit'],
        rows: [
            [
                { content: 'Feature 1' },
                { content: IconRegistry[IconCategory.SYSTEM].cancel, isIcon: true },
                { content: 'Available' },
                { content: 'Faucibus morbi augue tempor elementum' },
            ],
            [
                { content: 'Feature 2' },
                { content: IconRegistry[IconCategory.SYSTEM].success, isIcon: true },
                { content: 'Not Available' },
            ],
        ],
    },
};
