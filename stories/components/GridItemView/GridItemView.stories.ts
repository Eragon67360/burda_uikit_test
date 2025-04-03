import type { Meta, StoryObj } from '@storybook/html';
import { createGridItemView, GridItemViewArgs } from './GridItemView';

const meta: Meta<GridItemViewArgs> = {
    title: 'Components (Organisms)/GridItemView',
    tags: ['autodocs'],
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        gridItemType: {
            control: 'radio',
            options: ['article', 'card'],
            defaultValue: 'article',
            description: 'Type of grid item to render',
        },
        articles: {
            control: 'object',
            description: 'List of articles to render',
            defaultValue: [],
            if: { arg: 'gridItemType', eq: 'article' }
        },
        cards: {
            control: 'object',
            description: 'List of cards to render',
            defaultValue: [],
            if: { arg: 'gridItemType', eq: 'card' }
        },
        maxWidth: {
            control: 'text',
            description: 'Max width of the grid item container (any valid CSS rule). If not set, the container will take the full width of the parent.',
        },

    },
    render: (args) => createGridItemView(args as any)
};

export default meta;
type Story = StoryObj<GridItemViewArgs>;

export const DefaultGridItemView: Story = {
    args: {
        maxWidth: '700px',
        gridItemType: 'article',
        articles: [
            {
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                buttonLabel: 'Details',
                badgeText: 'Tipp',
            },
            {
                title: 'Weinpaket',
                image: 'wine.png',
                buttonLabel: 'Details',
            },
            {
                title: 'Clatronic Raclette Grill',
                image: 'barbecue.png',
                buttonLabel: 'Details',
            },
            {
                title: 'THE DUKE - Munich Dry Gin',
                image: 'gin.png',
                buttonLabel: 'Details',
                badgeText: 'NEU',
            },
            {
                title: '70 EUR Amazon.de Gutschein',
                image: 'amazon.png',
                buttonLabel: 'Details',
            },
            {
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                buttonLabel: 'Details',
                badgeText: 'Tipp',
            },
            {
                title: '70 EUR Amazon.de Gutschein',
                image: 'amazon.png',
                buttonLabel: 'Details',
            },
        ]
    }
};

export const GridItemViewWithArticles: Story = {
    args: {
        gridItemType: 'article',
        articles: [
            {
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                buttonLabel: 'Details',
                badgeText: 'Tipp',
            },
            {
                title: 'Weinpaket',
                image: 'wine.png',
                buttonLabel: 'Details',
            },
            {
                title: 'Clatronic Raclette Grill',
                image: 'barbecue.png',
                buttonLabel: 'Details',
            },
            {
                title: 'THE DUKE - Munich Dry Gin',
                image: 'gin.png',
                buttonLabel: 'Details',
                badgeText: 'NEU',
            },
            {
                title: '70 EUR Amazon.de Gutschein',
                image: 'amazon.png',
                buttonLabel: 'Details',
            },
            {
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                buttonLabel: 'Details',
                badgeText: 'Tipp',
            },
            {
                title: '70 EUR Amazon.de Gutschein',
                image: 'amazon.png',
                buttonLabel: 'Details',
            },
        ]
    }
};

export const GridItemViewWithCards: Story = {
    args: {
        gridItemType: 'card',
        cards: [
            {
                title: 'Login E-Paper',
                image: 'documentHand',
                text: 'Lorem ipsum dolor sit amet consectetur. Euismod feugiat condimentum ipsum pellentesque amet arcu sed ante enim.',
                buttonLabel: 'Login E-Paper',
            },
            {
                title: 'Heftreklamation',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Zur Heftreklamation',
            },
            {
                title: 'Kontakt',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Zum Kontaktformular',
            },
            {
                title: 'Geschenkurkunde',
                image: 'certificate',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Jetzt erstellen',
            },
            {
                title: 'Bankverbindung',
                image: 'creditCard',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Daten ändern',
            },
            {
                title: 'Umzugsservice',
                image: 'delivery',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Adresse ändern',
            },
            {
                title: 'Urlaubsservice',
                image: 'vacation',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Adresse mitteilen',
            },
            {
                title: 'Abonnement kündigen',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Rufen Sie uns an',
            },
            {
                title: 'FAQ',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Zur FAQ Übersicht',
            },
        ]
    }
};

export const GreyBackgroundGridItemViewWithArticles: Story = {
    parameters: {
        backgrounds: {
            default: 'White',
        },
    },
    args: {
        gridItemType: 'article',
        articles: [
            {
                backgroundColor: 'gray',
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                buttonLabel: 'Details',
                badgeText: 'Tipp',
            },
            {
                backgroundColor: 'gray',
                title: 'Weinpaket',
                image: 'wine.png',
                buttonLabel: 'Details',
            },
            {
                backgroundColor: 'gray',
                title: 'Clatronic Raclette Grill',
                image: 'barbecue.png',
                buttonLabel: 'Details',
            },
            {
                backgroundColor: 'gray',
                title: 'THE DUKE - Munich Dry Gin',
                image: 'gin.png',
                buttonLabel: 'Details',
                badgeText: 'NEU',
            },
            {
                backgroundColor: 'gray',
                title: '70 EUR Amazon.de Gutschein',
                image: 'amazon.png',
                buttonLabel: 'Details',
            },
            {
                backgroundColor: 'gray',
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                buttonLabel: 'Details',
                badgeText: 'Tipp',
            },
            {
                backgroundColor: 'gray',
                title: '70 EUR Amazon.de Gutschein',
                image: 'amazon.png',
                buttonLabel: 'Details',
            },
        ]
    }
};

export const GreyBackgroundGridItemViewWithCards: Story = {
    parameters: {
        backgrounds: {
            default: 'White',
        },
    },
    args: {
        gridItemType: 'card',
        cards: [
            {
                backgroundColor: 'gray',
                title: 'Login E-Paper',
                image: 'documentHand',
                text: 'Lorem ipsum dolor sit amet consectetur. Euismod feugiat condimentum ipsum pellentesque amet arcu sed ante enim.',
                buttonLabel: 'Login E-Paper',
            },
            {
                backgroundColor: 'gray',
                title: 'Heftreklamation',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Zur Heftreklamation',
            },
            {
                backgroundColor: 'gray',
                title: 'Kontakt',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Zum Kontaktformular',
            },
            {
                backgroundColor: 'gray',
                title: 'Geschenkurkunde',
                image: 'certificate',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Jetzt erstellen',
            },
            {
                backgroundColor: 'gray',
                title: 'Bankverbindung',
                image: 'creditCard',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Daten ändern',
            },
            {
                backgroundColor: 'gray',
                title: 'Umzugsservice',
                image: 'delivery',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Adresse ändern',
            },
            {
                backgroundColor: 'gray',
                title: 'Urlaubsservice',
                image: 'vacation',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Adresse mitteilen',
            },
            {
                backgroundColor: 'gray',
                title: 'Abonnement kündigen',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Rufen Sie uns an',
            },
            {
                backgroundColor: 'gray',
                title: 'FAQ',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Zur FAQ Übersicht',
            },
        ]
    }
};

export const GreyBackgroundGridItemViewWithCardsWithFixedGrid: Story = {
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'White',
        },
    },
    args: {
        gridItemType: 'card',
        centerItems: true,
        fixedColumnCount: 3,
        cards: [
            {
                backgroundColor: 'gray',
                title: 'Login E-Paper',
                image: 'documentHand',
                text: 'Lorem ipsum dolor sit amet consectetur. Euismod feugiat condimentum ipsum pellentesque amet arcu sed ante enim.',
                buttonLabel: 'Login E-Paper',
            },
            {
                backgroundColor: 'gray',
                title: 'Heftreklamation',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Zur Heftreklamation',
            },
            {
                backgroundColor: 'gray',
                title: 'Kontakt',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Zum Kontaktformular',
            },
            {
                backgroundColor: 'gray',
                title: 'Geschenkurkunde',
                image: 'certificate',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Jetzt erstellen',
            },
            {
                backgroundColor: 'gray',
                title: 'Bankverbindung',
                image: 'creditCard',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Daten ändern',
            },
            {
                backgroundColor: 'gray',
                title: 'Umzugsservice',
                image: 'delivery',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Adresse ändern',
            },
            {
                backgroundColor: 'gray',
                title: 'Urlaubsservice',
                image: 'vacation',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Adresse mitteilen',
            },
            {
                backgroundColor: 'gray',
                title: 'Abonnement kündigen',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Rufen Sie uns an',
            },
            {
                backgroundColor: 'gray',
                title: 'FAQ',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'Zur FAQ Übersicht',
            },
        ]
    }
};
