import type { Meta, StoryObj } from '@storybook/html';
import { createFlyout, FlyoutArgs } from './Flyout';

const meta: Meta<FlyoutArgs> = {
    title: 'Components (Organisms)/Overlay/Flyout',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        items: {
            control: 'object',
            description: 'Array of flyout items with icon, title, and description'
        },
        label: {
            control: 'text',
            description: 'Label visible on the button'
        }
    },
    render: (args) => createFlyout(args)
};

export default meta;
type Story = StoryObj<FlyoutArgs>;

export const Default: Story = {
    args: {
        label: 'Abo-Vorteile',
        items: [
            {
                icon: 'https://via.placeholder.com/24',
                title: 'Pünktliche Lieferung',
                description: 'Sie bekommen Ihre Wunschzeitschrift pünktlich nach Hause geliefert.'
            },
            {
                icon: 'https://via.placeholder.com/24',
                title: 'Direkt vom Verlag',
                description: 'Sie erhalten Ihre Wunschzeitschrift direkt vom Verlagshaus, ohne Zwischenhändler.'
            },
            {
                icon: 'https://via.placeholder.com/24',
                title: 'E-Paper zum Sonderpreis',
                description: 'Die digitale Ausgabe ist günstiger als die Printversion. Sie sparen bei einer Kombination aus Print & Digital.'
            }
        ]
    }
};

export const Expanded: Story = {
    args: {
        ...Default.args
    }
};
