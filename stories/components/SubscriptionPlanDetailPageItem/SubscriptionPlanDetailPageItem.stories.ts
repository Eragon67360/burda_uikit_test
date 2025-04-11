import type { Meta, StoryObj } from '@storybook/html';
import { createSubscriptionPlanDetailPageItem, SubscriptionPlanDetailPageItemArgs } from './SubscriptionPlanDetailPageItem';

const meta: Meta<SubscriptionPlanDetailPageItemArgs> = {
  title: 'Components (Molecules)/SubscriptionPlan/DetailPageItem',
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    title: {
      description: 'Title of the subscription plan',
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    subtitle: {
      description: 'Subtitle of the subscription plan',
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    badgeLabel: {
      description: 'Label for the badge',
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    priceInfo: {
      description: 'Price information of the subscription plan',
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    characteristics: {
      description: 'Array of characteristics with icons and content',
      control: 'object',
      table: {
        type: { summary: 'Array<{ icon?: string, content: string }>' },
        category: 'Content',
      },
    },
    backgroundColor: {
      description: 'Background color of the item',
      control: 'radio',
      options: ['white', 'gray'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'white' },
        category: 'Appearance',
      },
    },
    maxWidth: {
      description: 'Maximum width of the item',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '460px' },
        category: 'Appearance',
      },
    },
    classNames: {
      description: 'Additional class names for custom styling',
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: 'Appearance',
      },
    },
    primaryCTALabel: {
      description: 'Label for the primary call-to-action button',
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    onPrimaryClick: {
      description: 'Click handler for the primary call-to-action button',
      action: 'clicked',
      table: {
        type: { summary: 'function' },
        category: 'Events',
      },
    },
  },
  render: (args) => createSubscriptionPlanDetailPageItem(args),
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
  },
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
  },
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
  },
};
