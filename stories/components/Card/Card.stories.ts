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
    backgroundColor: {
      control: 'radio',
      options: ['white', 'gray'],
      description: 'Background color of the Card container',
      defaultValue: 'white',
    },
    image: {
      control: 'select',
      options: Object.keys(IconRegistry[IconCategory.LARGE]),
      description: 'Image shown on the left side of the Card',
      defaultValue: 'burdaMag',
    },
  },
  render: (args) => createCard(args)
};

export default meta;
type Story = StoryObj<CardArgs>;

const styledCardText = `
  Bei Fragen rund um das Thema Abo erreichen Sie uns unter:
  <br>
  <span class="py-2 inline-block font-roboto-serif text-base font-semibold">07816 39 65 20**</span>
  <br>
  Bei Fragen rund um das Thema Abo erreichen Sie uns unter: dieser Anruf kostet € 0,20/Verbindung aus allen deutschen Netzen.
`;

export const DefaultCard: Story = {
  args: {
    backgroundColor: 'white',
    image: 'burdaMag',
    title: 'Card ipsum',
    text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
    buttonLabel: 'zum Angebot',
    onClick: () => console.log('Button clicked')
  },
  render: (args) => (`
    <div class="mx-auto w-96">
      ${createCard(args)}
    </div>
    `)
};

export const MultipleCards: Story = {
  args: {
    backgroundColor: 'white',
    image: 'burdaMag',
    title: 'Card ipsum',
    text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
    buttonLabel: 'zum Angebot',
    onClick: () => console.log('Button clicked'),
  },
  argTypes: {
    image: {
      table: {
        disable: true
      }
    }
  },
  render: (args) => (`
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      ${createCard(args)}
      ${createCard({ ...args, image: 'emailCheck', text: 'Der kostenlose FOCUS-Magazin-Newsletter liefert Ihnen schon freitags die wichtigsten Themen der kommenden Woche.' })}
      ${createCard({ ...args, image: 'keypad', text: styledCardText, buttonLabel: '' })}
    </div>
    `)
};

export const WithoutLinkCard: Story = {
  args: {
    backgroundColor: 'white',
    image: 'burdaMag',
    title: 'Card ipsum',
    text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!'
  },
  render: (args) => (`
    <div class="mx-auto w-96">
      ${createCard(args)}
    </div>
    `)
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
  globals: {
    backgrounds: { value: 'white', grid: false },
  },
  render: (args) => (`
    <div class="mx-auto w-96">
      ${createCard(args)}
    </div>
    `)
};

export const StyledTextCard: Story = {
  args: {
    backgroundColor: 'white',
    title: 'Card ohne Link',
    image: 'keypad',
    text: styledCardText,
  },
  render: (args) => (`
    <div class="mx-auto w-96">
      ${createCard(args)}
    </div>
    `)
};
