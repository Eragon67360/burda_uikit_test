import type { Meta, StoryObj } from '@storybook/html';
import { createSubscriptionPlan, SubscriptionPlanArgs } from './SubscriptionPlan';

const meta: Meta<SubscriptionPlanArgs> = {
    title: 'Components (Molecules)/SubscriptionPlan',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        image: { control: 'text' },
        title: { control: 'text' },
        subtitle: { control: 'text' },
        characteristics: { control: 'object' },
        infoLabel: { control: 'text' },
        primaryCTALabel: { control: 'text' },
        onPrimaryClick: { action: 'primary clicked' },
    },
    render: (args) => createSubscriptionPlan(args as any)
};

export default meta;
type Story = StoryObj<SubscriptionPlanArgs>;

export const Default: Story = {
    args: {
        image: '/burda_subscriptions_1.png',
        title: 'Focus',
        subtitle: 'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
        characteristics: [
            'FOCUS klassisch als Print-Ausgabe',
            'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
            'Feature 3',
            'Feature 4',
        ],
        infoLabel: 'ab 3,40 € pro Ausgabe',
        primaryCTALabel: 'Subscribe Now',
        onPrimaryClick: () => console.log('Primary CTA clicked'),
    },
};

export const ThreePlans: Story = {
    render: () => {
        const container = document.createElement('div');
        container.className = 'flex gap-8 items-end';

        const plan1 = createSubscriptionPlan({
            image: '/burda_subscriptions_1.png',
            title: 'FOCUS',
            subtitle: 'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
            characteristics: [
                'FOCUS klassisch als Print-Ausgabe',
                'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
                'FOCUS klassisch als Print-Ausgabe',
                'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
            ],
            infoLabel: 'ab 3,40 € pro Ausgabe',
            primaryCTALabel: 'Abo auswählen',
            onPrimaryClick: () => console.log('Plan 1 Primary clicked'),
        });

        const plan2 = createSubscriptionPlan({
            image: '/burda_subscriptions_2.png',
            title: 'FOCUS MONEY',
            subtitle: 'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
            characteristics: [
                'FOCUS klassisch als Print-Ausgabe',
                'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
                'FOCUS klassisch als Print-Ausgabe',
                'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
            ],
            infoLabel: 'ab 3,40 € pro Ausgabe',
            primaryCTALabel: 'Abo auswählen',
            onPrimaryClick: () => console.log('Plan 2 Primary clicked'),
        });

        const plan3 = createSubscriptionPlan({
            image: '/burda_subscriptions_3.png',
            title: 'FOCUS+',
            subtitle: 'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
            characteristics: [
                'FOCUS klassisch als Print-Ausgabe',
                'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
                'FOCUS klassisch als Print-Ausgabe',
                'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
            ],
            infoLabel: 'ab 3,40 € pro Ausgabe',
            primaryCTALabel: 'Abo auswählen',
            onPrimaryClick: () => console.log('Plan 3 Primary clicked'),
        });

        container.appendChild(plan1);
        container.appendChild(plan2);
        container.appendChild(plan3);

        return container;
    }
};
