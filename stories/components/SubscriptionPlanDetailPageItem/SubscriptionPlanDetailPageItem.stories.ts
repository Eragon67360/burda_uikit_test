import type { Meta, StoryObj } from '@storybook/html';
import { createSubscriptionPlanDetailPageItem, SubscriptionPlanDetailPageItemArgs } from './SubscriptionPlanDetailPageItem';

const meta: Meta<SubscriptionPlanDetailPageItemArgs> = {
    title: 'Components (Molecules)/SubscriptionPlan/DetailPageItem',
    tags: ['autodocs'],
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {

    },
    render: (args) => createSubscriptionPlanDetailPageItem(args as any)
};

export default meta;
type Story = StoryObj<SubscriptionPlanDetailPageItemArgs>;

export const DefaultSubscriptionPlanDetailPageItem: Story = {
    args: {
        title: 'Jahres-Abo',
        priceInfo: 'nur <span class="text-subscription-default">&nbsp;5,20 €&nbsp;</span> /Ausgabe',
        characteristics: [
            { icon: 'calendar', content: '1 Jahr <span class="font-bold">FOCUS frei Haus</span> für mich' },
            { icon: 'plus', content: '<span class="font-bold">Attraktives Geschenk</span>' },
        ],
        primaryCTALabel: 'Abo auswählen',
        onPrimaryClick: () => console.log('Primary CTA clicked'),
    }
};

export const SubscriptionPlanDetailPageItemWithBadge: Story = {
    args: {
        title: 'Jahres-Abo',
        priceInfo: 'nur <span class="text-subscription-default">&nbsp;5,20 €&nbsp;</span> /Ausgabe',
        badgeLabel: 'Topseller',
        characteristics: [
            { icon: 'calendar', content: '1 Jahr <span class="font-bold">FOCUS frei Haus</span> für mich' },
            { icon: 'plus', content: '<span class="font-bold">Attraktives Geschenk</span>' },
        ],
        primaryCTALabel: 'Abo auswählen',
        onPrimaryClick: () => console.log('Primary CTA clicked'),
    }
};

export const SubscriptionPlanDetailPageItemWithSubtitle: Story = {
    args: {
        title: 'Jahres-Abo',
        subtitle: '12 Ausgaben',
        priceInfo: 'nur <span class="text-subscription-default">&nbsp;5,20 €&nbsp;</span> /Ausgabe',
        characteristics: [
            { icon: 'calendar', content: '1 Jahr <span class="font-bold">FOCUS frei Haus</span> für mich' },
            { icon: 'plus', content: '<span class="font-bold">Attraktives Geschenk</span>' },
        ],
        primaryCTALabel: 'Abo auswählen',
        onPrimaryClick: () => console.log('Primary CTA clicked'),
    }
};
