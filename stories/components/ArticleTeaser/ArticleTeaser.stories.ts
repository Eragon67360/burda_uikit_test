import type { Meta, StoryObj } from '@storybook/html';
import { createArticleTeaser, ArticleTeaserArgs } from './ArticleTeaser';
import { background } from 'storybook/internal/theming';

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

const articleTeaser: Partial<ArticleTeaserArgs> = {
    title: 'Unsere Prämienwelt',
    tabItems: [
        { id: 'new', label: 'NEU' },
        { id: 'topseller', label: 'Topseller' },
    ],
    tertiaryButtonLabel: 'zu allen Prämien',
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
    ]
}

const grayBackgroundArticleTeaser: Partial<ArticleTeaserArgs> = {
    title: 'Unsere Prämienwelt',
    tabItems: [
        { id: 'new', label: 'NEU' },
        { id: 'topseller', label: 'Topseller' },
    ],
    tertiaryButtonLabel: 'zu allen Prämien',
    backgroundColor: 'gray',
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
    ]
}

export const DefaultArticleTeaserDesktop: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'desktop',
        },
    },
    args: articleTeaser,
};

export const DefaultArticleTeaserMobile: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        },
    },
    args: articleTeaser,
};

export const GrayBackgroundArticleTeaserDesktop: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'desktop',
        },
        backgrounds: {
            default: 'white',
        },
    },
    args: grayBackgroundArticleTeaser,
};

export const GrayBackgroundArticleTeaserMobile: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        },
        backgrounds: {
            default: 'white',
        },
    },
    args: grayBackgroundArticleTeaser,
};
