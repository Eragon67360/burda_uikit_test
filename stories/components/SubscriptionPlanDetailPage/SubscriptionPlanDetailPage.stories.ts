import type { Meta, StoryObj } from '@storybook/html';
import { createSubscriptionPlanDetailPage, SubscriptionPlanDetailPageArgs } from './SubscriptionPlanDetailPage';

const meta: Meta<SubscriptionPlanDetailPageArgs> = {
    title: 'Components (Molecules)/SubscriptionPlan/DetailPage',
    tags: ['autodocs'],
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {

    },
    render: (args) => createSubscriptionPlanDetailPage(args as any)
};

export default meta;
type Story = StoryObj<SubscriptionPlanDetailPageArgs>;

export const DefaultSubscriptionPlanDetailPage: Story = {
    args: {
        title: 'Mini-Abo',
        priceInfo: 'nur <span class="text-subscription-default">&nbsp;3,40 €&nbsp;</span> /Ausgabe',
        characteristics: [
            { icon: 'book', content: '10 Wochen <span class="font-bold">FOCUS frei Haus</span> testen' },
            { icon: 'plus', content: '<span class="font-bold">Geschenk & 34% sparen</span>' },
        ],
        primaryCTALabel: 'Abo auswählen',
        onPrimaryClick: () => console.log('Primary CTA clicked'),
    }
};

export const SubscriptionPlanDetailPageWithBadgeAndSubtitle: Story = {
    args: {
        title: 'Jahres-Abo',
        subtitle: '12 Ausgaben',
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
