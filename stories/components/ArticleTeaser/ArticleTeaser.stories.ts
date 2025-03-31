import type { Meta, StoryObj } from '@storybook/html';
import { createArticleTeaser, ArticleTeaserArgs } from './ArticleTeaser';

const meta: Meta<ArticleTeaserArgs> = {
    title: 'Components (Organisms)/ArticleTeaser',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        controls: { expanded: true },
    },
    argTypes: {

    },
    render: (args) => createArticleTeaser(args as any)
};

export default meta;
type Story = StoryObj<ArticleTeaserArgs>;

export const DefaultArticleTeaser: Story = {
    args: {
        title: 'Unsere Prämienwelt',
        tabItems: [
            { id: 'new', label: 'NEU' },
            { id: 'topseller', label: 'Topseller' },
        ],
        buttonLabel: 'zu allen Prämien',
        articlesForTab1: [
            {
                title: 'Just Vegan Heißluftfritteuse',
                image: 'fryer_4.png',
                buttonLabel: 'Details',
                badgeText: 'NEU',
            },
            {
                title: 'Weinpaket',
                image: 'wine.png',
                buttonLabel: 'Details',
                badgeText: 'NEU',
            },
            {
                title: 'Clatronic Raclette Grill',
                image: 'barbecue.png',
                buttonLabel: 'Details',
                badgeText: 'NEU',
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
                badgeText: 'NEU',
            },
            {
                title: '70 EUR Amazon.de Gutschein',
                image: 'amazon.png',
                buttonLabel: 'Details',
                badgeText: 'NEU',
            },
        ],
        articlesForTab2: [
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
                badgeText: 'Tipp',
            },
            {
                title: 'Clatronic Raclette Grill',
                image: 'barbecue.png',
                buttonLabel: 'Details',
                badgeText: 'Tipp',
            },
            {
                title: 'THE DUKE - Munich Dry Gin',
                image: 'gin.png',
                buttonLabel: 'Details',
                badgeText: 'Tipp',
            },
            {
                title: '70 EUR Amazon.de Gutschein',
                image: 'amazon.png',
                buttonLabel: 'Details',
                badgeText: 'Tipp',
            },
            {
                title: '70 EUR Amazon.de Gutschein',
                image: 'amazon.png',
                buttonLabel: 'Details',
                badgeText: 'Tipp',
            },
        ]
    }
};
