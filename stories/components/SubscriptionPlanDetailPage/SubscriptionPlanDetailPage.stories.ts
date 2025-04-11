import type { Meta, StoryObj } from '@storybook/html';
import { createSubscriptionPlanDetailPage, SubscriptionPlanDetailPageArgs } from './SubscriptionPlanDetailPage';
import { IconRegistry, IconCategory } from '@/stories/assets/icons';

const meta: Meta<SubscriptionPlanDetailPageArgs> = {
  title: 'Components (Molecules)/SubscriptionPlan/DetailPage',
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    image: {
      control: 'text',
      description: 'URL of the subscription plan image',
    },
    imageAltText: {
      control: 'text',
      description: 'Alt text for the subscription plan image',
    },
    showMoreButtonLabel: {
      control: 'text',
      description: 'Label for the expand button',
    },
    showLessButtonLabel: {
      control: 'text',
      description: 'Alternative label for the collapse button (if not provided, value of showMoreButtonLabel will be used)',
    },
    backgroundColor: {
      control: 'radio',
      options: ['white', 'gray'],
      description: 'Background color of the component',
    },
    iconButtonIcon: {
      control: 'select',
      options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
      description: 'Icon for the icon button',
    },
    onIconButtonClick: {
      action: 'clicked',
      description: 'Click event handler for the icon button',
      table: {
        category: 'Events',
        type: { summary: 'function' },
      },
    },
    tertiaryButtonLabel: {
      control: 'text',
      description: 'Label for the tertiary button',
    },
    tertiaryButtonIcon: {
      control: 'select',
      options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
      description: 'Icon for the icon button',
    },
    onTertiaryButtonClick: {
      action: 'clicked',
      description: 'Click event handler for the tertiary button',
      table: {
        category: 'Events',
        type: { summary: 'function' },
      },
    },
    table: {
      control: 'object',
      description: 'Table data for subscription details',
    },
    tabItems: {
      control: 'object',
      description: 'Tab configuration for different subscription views',
    },
    elements: {
      control: 'object',
      description: 'Array of subscription plan elements (only if tabItems are not provided)',
    },
    elementsForTab1: {
      control: 'object',
      description: 'Array of subscription plan elements for the first tab (only if tabItems are provided)',
    },
    elementsForTab2: {
      control: 'object',
      description: 'Array of subscription plan elements for the second tab (only if tabItems are provided)',
    },
  },
  render: createSubscriptionPlanDetailPage,
};

export default meta;
type Story = StoryObj<SubscriptionPlanDetailPageArgs>;

const elements = [
  {
    title: 'Mini-Abo',
    priceInfo: 'nur <span class="text-subscription-default">&nbsp;3,40 €&nbsp;</span> /Ausgabe',
    characteristics: [
      { icon: 'book', content: '10 Wochen <span class="font-bold">FOCUS frei Haus</span> testen' },
      { icon: 'plus', content: '<span class="font-bold">Geschenk & 34% sparen</span>' },
    ],
    primaryCTALabel: 'Abo auswählen',
    onPrimaryClick: () => console.log('Primary CTA clicked'),
  },
  {
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
  {
    title: 'Mini-Abo',
    priceInfo: 'nur <span class="text-subscription-default">&nbsp;3,40 €&nbsp;</span> /Ausgabe',
    characteristics: [
      { icon: 'book', content: '10 Wochen <span class="font-bold">FOCUS frei Haus</span> testen' },
      { icon: 'plus', content: '<span class="font-bold">Geschenk & 34% sparen</span>' },
    ],
    primaryCTALabel: 'Abo auswählen',
    onPrimaryClick: () => console.log('Primary CTA clicked'),
  },
  {
    title: 'Mini-Abo',
    priceInfo: 'nur <span class="text-subscription-default">&nbsp;3,40 €&nbsp;</span> /Ausgabe',
    characteristics: [
      { icon: 'book', content: '10 Wochen <span class="font-bold">FOCUS frei Haus</span> testen' },
      { icon: 'plus', content: '<span class="font-bold">Geschenk & 34% sparen</span>' },
    ],
    primaryCTALabel: 'Abo auswählen',
    onPrimaryClick: () => console.log('Primary CTA clicked'),
  },
  {
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
  {
    title: 'Mini-Abo',
    priceInfo: 'nur <span class="text-subscription-default">&nbsp;3,40 €&nbsp;</span> /Ausgabe',
    characteristics: [
      { icon: 'book', content: '10 Wochen <span class="font-bold">FOCUS frei Haus</span> testen' },
      { icon: 'plus', content: '<span class="font-bold">Geschenk & 34% sparen</span>' },
    ],
    primaryCTALabel: 'Abo auswählen',
    onPrimaryClick: () => console.log('Primary CTA clicked'),
  },
  {
    title: 'Mini-Abo',
    priceInfo: 'nur <span class="text-subscription-default">&nbsp;3,40 €&nbsp;</span> /Ausgabe',
    characteristics: [
      { icon: 'book', content: '10 Wochen <span class="font-bold">FOCUS frei Haus</span> testen' },
      { icon: 'plus', content: '<span class="font-bold">Geschenk & 34% sparen</span>' },
    ],
    primaryCTALabel: 'Abo auswählen',
    onPrimaryClick: () => console.log('Primary CTA clicked'),
  },
  {
    title: 'Jahres-Abo',
    priceInfo: 'nur <span class="text-subscription-default">&nbsp;5,20 €&nbsp;</span> /Ausgabe',
    characteristics: [
      { icon: 'calendar', content: '1 Jahr <span class="font-bold">FOCUS frei Haus</span> für mich' },
      { icon: 'plus', content: '<span class="font-bold">Attraktives Geschenk</span>' },
    ],
    primaryCTALabel: 'Abo auswählen',
    onPrimaryClick: () => console.log('Primary CTA clicked'),
  },
  {
    title: 'Mini-Abo',
    priceInfo: 'nur <span class="text-subscription-default">&nbsp;3,40 €&nbsp;</span> /Ausgabe',
    characteristics: [
      { icon: 'book', content: '10 Wochen <span class="font-bold">FOCUS frei Haus</span> testen' },
      { icon: 'plus', content: '<span class="font-bold">Geschenk & 34% sparen</span>' },
    ],
    primaryCTALabel: 'Abo auswählen',
    onPrimaryClick: () => console.log('Primary CTA clicked'),
  },
];

const elementsWithSubtitles = [
  {
    title: 'Mini-Abo',
    subtitle: '6 Ausgaben',
    priceInfo: 'nur <span class="text-subscription-default">&nbsp;3,40 €&nbsp;</span> /Ausgabe',
    characteristics: [
      { icon: 'book', content: '10 Wochen <span class="font-bold">FOCUS frei Haus</span> testen' },
      { icon: 'plus', content: '<span class="font-bold">Geschenk & 34% sparen</span>' },
    ],
    primaryCTALabel: 'Abo auswählen',
    onPrimaryClick: () => console.log('Primary CTA clicked'),
  },
  {
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
  },
  {
    title: 'Mini-Abo',
    subtitle: '6 Ausgaben',
    priceInfo: 'nur <span class="text-subscription-default">&nbsp;3,40 €&nbsp;</span> /Ausgabe',
    characteristics: [
      { icon: 'book', content: '10 Wochen <span class="font-bold">FOCUS frei Haus</span> testen' },
      { icon: 'plus', content: '<span class="font-bold">Geschenk & 34% sparen</span>' },
    ],
    primaryCTALabel: 'Abo auswählen',
    onPrimaryClick: () => console.log('Primary CTA clicked'),
  },
];

export const DefaultSubscriptionPlanDetailPage: Story = {
  args: {
    image: '/burda_subscriptions_4.png',
    showMoreButtonLabel: 'Details',
    elements,
  },
};

export const SubscriptionPlanDetailPageWithAdditionalButtons: Story = {
  args: {
    image: '/burda_subscriptions_4.png',
    showMoreButtonLabel: 'Details',
    iconButtonIcon: 'search',
    onIconButtonClick: () => console.log('Icon button clicked'),
    tertiaryButtonLabel: 'Leseprobe',
    tertiaryButtonIcon: 'document',
    onTertiaryButtonClick: () => console.log('Tertiary button clicked'),
    elements,
  },
};

export const SubscriptionPlanDetailPageWithTable: Story = {
  args: {
    image: '/burda_subscriptions_4.png',
    showMoreButtonLabel: 'Details',
    iconButtonIcon: 'search',
    onIconButtonClick: () => console.log('Icon button clicked'),
    tertiaryButtonLabel: 'Leseprobe',
    tertiaryButtonIcon: 'document',
    onTertiaryButtonClick: () => console.log('Tertiary button clicked'),
    table: [
      { title: 'Erscheinung:', text: '26 Ausgaben pro Jahr' },
      { title: 'Abonnement:', text: 'klassisch als Heft' },
      { title: 'Vorteils-Abo:', text: '6% Preisvorteil gegenüber Einzelkauf' },
      { title: 'Lieferung:', text: 'versandkostenfrei' },
      { title: 'Kündigung:', text: 'jederzeit nach 1. Laufzeit' },
    ],
    elements,
  },
};

export const SubscriptionPlanDetailPageWithTabs: Story = {
  args: {
    image: '/burda_subscriptions_4.png',
    showMoreButtonLabel: 'Details',
    iconButtonIcon: 'search',
    onIconButtonClick: () => console.log('Icon button clicked'),
    tertiaryButtonLabel: 'Leseprobe',
    tertiaryButtonIcon: 'document',
    onTertiaryButtonClick: () => console.log('Tertiary button clicked'),
    table: [
      { title: 'Erscheinung:', text: '26 Ausgaben pro Jahr' },
      { title: 'Abonnement:', text: 'klassisch als Heft' },
      { title: 'Vorteils-Abo:', text: '6% Preisvorteil gegenüber Einzelkauf' },
      { title: 'Lieferung:', text: 'versandkostenfrei' },
      { title: 'Kündigung:', text: 'jederzeit nach 1. Laufzeit' },
    ],
    tabItems: [
      { id: 'subsForMe', label: 'Abo für mich' },
      { id: 'subsAsGift', label: 'Abo verschenken' },
    ],
    elementsForTab1: elements,
    elementsForTab2: elementsWithSubtitles,
  },
};

export const GrayBackgroundSubscriptionPlanDetailPage: Story = {
  parameters: {
    backgrounds: {
      default: 'White',
    },
  },
  args: {
    backgroundColor: 'gray',
    image: '/burda_subscriptions_4.png',
    showMoreButtonLabel: 'Details',
    iconButtonIcon: 'search',
    onIconButtonClick: () => console.log('Icon button clicked'),
    tertiaryButtonLabel: 'Leseprobe',
    tertiaryButtonIcon: 'document',
    onTertiaryButtonClick: () => console.log('Tertiary button clicked'),
    table: [
      { title: 'Erscheinung:', text: '26 Ausgaben pro Jahr' },
      { title: 'Abonnement:', text: 'klassisch als Heft' },
      { title: 'Vorteils-Abo:', text: '6% Preisvorteil gegenüber Einzelkauf' },
      { title: 'Lieferung:', text: 'versandkostenfrei' },
      { title: 'Kündigung:', text: 'jederzeit nach 1. Laufzeit' },
    ],
    tabItems: [
      { id: 'subsForMe', label: 'Abo für mich' },
      { id: 'subsAsGift', label: 'Abo verschenken' },
    ],
    elementsForTab1: elementsWithSubtitles,
    elementsForTab2: elements,
  },
};
