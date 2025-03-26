import type { Meta, StoryObj } from '@storybook/html';
import { createArticle, ArticleArgs } from './Article';

const meta: Meta<ArticleArgs> = {
    title: 'Components (Molecules)/Article',
    tags: ['autodocs'],
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        backgroundColor: {
            control: 'radio',
            options: ['white', 'gray'],
            defaultValue: 'white',
            description: 'Background color of the article',
        },
        title: {
            control: 'text',
            description: 'Title of the article',
        },
        image: {
            control: 'text',
            description: 'Image of the article',
        },
        imageAltText: {
            control: 'text',
            description: 'Alternative text for the image (if undefined, the title will be used)',
        },
        buttonLabel: {
            control: 'text',
            description: 'Label of the button',
        },
        badgeText: {
            control: 'text',
            description: 'Text for the optional badge (if empty, no badge will be shown)',
        },
        onClick: {
            action: 'button clicked',
            description: 'Callback function when the button is clicked',
        },
    },
    render: (args) => (`
        <div class="w-48 h-72">
            ${createArticle(args)}
        </div>
    `)
};

export default meta;
type Story = StoryObj<ArticleArgs>;

export const DefaultArticle: Story = {
    args: {
        backgroundColor: 'white',
        title: 'Just Vegan Heißluftfritteuse',
        image: 'fryer_4.png',
        imageAltText: 'Just Vegan Heißluftfritteuse',
        buttonLabel: 'Details',
        badgeText: '',
        onClick: () => console.log('Button clicked')
    },
};

export const ArticleWithBadge: Story = {
    args: {
        backgroundColor: 'white',
        title: 'Just Vegan Heißluftfritteuse',
        image: 'fryer_4.png',
        imageAltText: 'Just Vegan Heißluftfritteuse',
        buttonLabel: 'Details',
        badgeText: 'Tipp',
        onClick: () => console.log('Button clicked')
    },
};

export const MultipleArticles: Story = {
    args: {
        backgroundColor: 'white',
        buttonLabel: 'Details',
        onClick: () => console.log('Button clicked')
    },
    render: (args) => (`
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div class="w-48 h-72">${createArticle({ ...args, title: 'Just Vegan Heißluftfritteuse', image: 'fryer_4.png', badgeText: 'Tipp' })}</div>
            <div class="w-48 h-72">${createArticle({ ...args, title: 'Weinpaket', image: 'wine.png', badgeText: 'NEU' })}</div>
            <div class="w-48 h-72">${createArticle({ ...args, title: 'Clatronic Raclette Grill', image: 'barbecue.png' })}</div>
            <div class="w-48 h-72">${createArticle({ ...args, title: 'THE DUKE - Munich Dry Gin', image: 'gin.png' })}</div>
        </div>
    `)
};

export const GreyBackgroundArticle: Story = {
    args: {
        backgroundColor: 'gray',
        title: 'Just Vegan Heißluftfritteuse',
        image: 'fryer_4.png',
        buttonLabel: 'Details',
        onClick: () => console.log('Button clicked')
    },
    globals: {
        backgrounds: { value: 'white', grid: false },
    },
};