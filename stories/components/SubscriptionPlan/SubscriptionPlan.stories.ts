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
        secondaryCTALabel: { control: 'text' },
        primaryCTALabel: { control: 'text' },
        onSecondaryClick: { action: 'secondary clicked' },
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
            'Feature 1',
            'Feature 2',
            'Feature 3',
            'Feature 4',
        ],
        secondaryCTALabel: 'Learn More',
        primaryCTALabel: 'Subscribe Now',
        onSecondaryClick: () => console.log('Secondary CTA clicked'),
        onPrimaryClick: () => console.log('Primary CTA clicked'),
    },
};