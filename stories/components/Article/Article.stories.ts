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
    render: (args) => (createArticle(args))
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
    render: (args) => {
        const articleElement = createArticle(args);
        const wrapper = document.createElement('div');
        wrapper.className = 'w-48 h-72';
        wrapper.appendChild(articleElement);
        return wrapper;
    }
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
    render: (args) => {
        const articleElement = createArticle(args);
        const wrapper = document.createElement('div');
        wrapper.className = 'w-48 h-72';
        wrapper.appendChild(articleElement);
        return wrapper;
    }
};

export const MultipleArticles: Story = {
    args: {
        backgroundColor: 'white',
        buttonLabel: 'Details',
        onClick: () => console.log('Button clicked')
    },
    render: (args) => {
        const mainWrapper = document.createElement('div');
        mainWrapper.className = 'grid grid-cols-1 md:grid-cols-3 gap-4 w-full';
        const articlesArgs = [
            { ...args, title: 'Just Vegan Heißluftfritteuse', image: 'fryer_4.png', badgeText: 'Tipp' },
            { ...args, title: 'Weinpaket', image: 'wine.png', badgeText: 'NEU' },
            { ...args, title: 'Clatronic Raclette Grill', image: 'barbecue.png' },
            { ...args, title: 'THE DUKE - Munich Dry Gin', image: 'gin.png' }
        ];
        articlesArgs.forEach((articleArgs) => {
            const articleWrapper = document.createElement('div');
            articleWrapper.className = 'w-48 h-72';
            articleWrapper.appendChild(createArticle(articleArgs));
            mainWrapper.appendChild(articleWrapper);
        })

        return mainWrapper;
    }
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
    render: (args) => {
        const articleElement = createArticle(args);
        const wrapper = document.createElement('div');
        wrapper.className = 'w-48 h-72';
        wrapper.appendChild(articleElement);
        return wrapper;
    }
};