import type { Meta, StoryObj } from '@storybook/html';
import { createCard, CardArgs } from './Card';
import { IconCategory, IconRegistry } from '../../assets/icons';

const meta: Meta<CardArgs> = {
  title: 'Components (Organisms)/Card',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    maxWidth: {
      control: 'text',
      description: 'Max width of the card. Any value between 360px and 600px is recommended.',
      table: {
        defaultValue: { summary: '384px' },
      },
    },
    backgroundColor: {
      control: 'radio',
      options: ['white', 'gray'],
      description: 'Background color of the Card container',
      defaultValue: 'white',
      table: {
        defaultValue: { summary: 'white' },
      },
    },
    image: {
      control: 'select',
      options: Object.keys(IconRegistry[IconCategory.LARGE]),
      description: 'Image shown on the left side of the Card',
      defaultValue: 'burdaMag',
    },
    title: {
      control: 'text',
      description: 'Main title of the card',
      defaultValue: 'Card Title',
    },
    text: {
      control: 'text',
      description: 'Description text for the card',
      defaultValue: 'Card description text',
    },
    buttonLabel: {
      control: 'text',
      description: 'Label for the CTA button (optional)',
      defaultValue: 'Call to Action',
    },
    onClick: {
      action: 'clicked',
      description: 'Optional click handler for the button',
    }
  },
  render: (args) => createCard(args)
};

export default meta;
type Story = StoryObj<CardArgs>;

const styledCardText = `
  Bei Fragen rund um das Thema Abo erreichen Sie uns unter:
  <br>
  <span class="py-2 inline-block text-hotline-footer-small ">07816 39 65 20**</span>
  <br>
  Bei Fragen rund um das Thema Abo erreichen Sie uns unter: dieser Anruf kostet € 0,20/Verbindung aus allen deutschen Netzen.
`;

export const DefaultCard: Story = {
  args: {
    maxWidth: '384px',
    backgroundColor: 'white',
    image: 'burdaMag',
    title: 'Card ipsum',
    text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
    buttonLabel: 'zum Angebot',
    onClick: () => console.log('Button clicked')
  },
};

export const WithoutLinkCard: Story = {
  args: {
    backgroundColor: 'white',
    image: 'burdaMag',
    title: 'Card ipsum',
    text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!'
  },
};

export const GreyBackgroundCard: Story = {
  args: {
    backgroundColor: 'gray',
    title: 'Card ipsum',
    image: 'burdaMag',
    text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
    buttonLabel: 'zum Angebot',
    onClick: () => console.log('Button clicked')
  },
  argTypes: {
    backgroundColor: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    backgrounds: {
        default: 'White',
    },
  }
};

export const StyledTextCard: Story = {
  args: {
    backgroundColor: 'white',
    title: 'Card ohne Link',
    image: 'keypad',
    text: styledCardText,
  },
};
