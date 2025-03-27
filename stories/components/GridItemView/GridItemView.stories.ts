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
        maxWidth: '600px',
        gridItemType: 'article',
        articles: [
            {
                backgroundColor: 'gray',
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                imageAltText: 'Just Vegan Heißluftfritteuse',
                buttonLabel: 'Details',
                badgeText: '',
                onClick: () => console.log('Button clicked'),
            },
            {
                backgroundColor: 'gray',
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                imageAltText: 'Just Vegan Heißluftfritteuse',
                buttonLabel: 'Details',
                badgeText: '',
                onClick: () => console.log('Button clicked'),
            },
            {
                backgroundColor: 'gray',
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                imageAltText: 'Just Vegan Heißluftfritteuse',
                buttonLabel: 'Details',
                badgeText: '',
                onClick: () => console.log('Button clicked'),
            },
            {
                backgroundColor: 'gray',
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                imageAltText: 'Just Vegan Heißluftfritteuse',
                buttonLabel: 'Details',
                badgeText: '',
                onClick: () => console.log('Button clicked'),
            },
            {
                backgroundColor: 'gray',
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                imageAltText: 'Just Vegan Heißluftfritteuse',
                buttonLabel: 'Details',
                badgeText: '',
                onClick: () => console.log('Button clicked'),
            },
            {
                backgroundColor: 'gray',
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                imageAltText: 'Just Vegan Heißluftfritteuse',
                buttonLabel: 'Details',
                badgeText: '',
                onClick: () => console.log('Button clicked'),
            },
        ]
    }
};

export const GridItemViewWithArticles: Story = {
    args: {
        gridItemType: 'article',
        articles: [
            {
                backgroundColor: 'gray',
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                imageAltText: 'Just Vegan Heißluftfritteuse',
                buttonLabel: 'Details',
                badgeText: '',
                onClick: () => console.log('Button clicked'),
            },
            {
                backgroundColor: 'gray',
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                imageAltText: 'Just Vegan Heißluftfritteuse',
                buttonLabel: 'Details',
                badgeText: '',
                onClick: () => console.log('Button clicked'),
            },
            {
                backgroundColor: 'gray',
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                imageAltText: 'Just Vegan Heißluftfritteuse',
                buttonLabel: 'Details',
                badgeText: '',
                onClick: () => console.log('Button clicked'),
            },
            {
                backgroundColor: 'gray',
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                imageAltText: 'Just Vegan Heißluftfritteuse',
                buttonLabel: 'Details',
                badgeText: '',
                onClick: () => console.log('Button clicked'),
            },
        ]
    }
};

export const GridItemViewWithCards: Story = {
    args: {
        gridItemType: 'card',
        cards: [
            {
                backgroundColor: 'gray',
                image: 'burdaMag',
                title: 'Card ipsum',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'zum Angebot',
                onClick: () => console.log('Button clicked')
            },
                        {
                backgroundColor: 'gray',
                image: 'burdaMag',
                title: 'Card ipsum',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'zum Angebot',
                onClick: () => console.log('Button clicked')
            },
                        {
                backgroundColor: 'gray',
                image: 'burdaMag',
                title: 'Card ipsum',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'zum Angebot',
                onClick: () => console.log('Button clicked')
            },
                        {
                backgroundColor: 'gray',
                image: 'burdaMag',
                title: 'Card ipsum',
                text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
                buttonLabel: 'zum Angebot',
                onClick: () => console.log('Button clicked')
            },
        ]
    }
};
