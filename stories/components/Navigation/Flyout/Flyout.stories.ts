import type { Meta, StoryObj } from '@storybook/html';
import { createFlyout, FlyoutArgs } from './Flyout';

const meta: Meta<FlyoutArgs> = {
    title: 'Components (Organisms)/Navigation/Flyout',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['search', 'sublinks'],
            description: 'Variant of the flyout component'
        },
        linkItems: {
            description: 'Array of link items for sublinks variant'
        },
        searchProps: {
            description: 'Search component properties for search variant'
        },
        triggerLabel: {
            control: 'text',
            description: 'Label for the trigger button'
        }
    },
    render: (args) => createFlyout(args)
};

export default meta;
type Story = StoryObj<FlyoutArgs>;
export const SearchFlyout: Story = {
    args: {
        variant: 'search',
        triggerLabel: 'Search',
        searchProps: {
            placeholder: 'Search products...',
            results: [
                { label: 'Product 1', href: '/product1' },
                { label: 'Product 2', href: '/product2' },
                { label: 'Product 3', href: '/product3' }
            ]
        }
    }
};

export const SubLinksFlyout: Story = {
    args: {
        variant: 'sublinks',
        triggerLabel: 'Zeitschriften',
        linkItems: [
            { label: 'Home', href: '/', target: '_self' },
            { label: 'About', href: '/about', target: '_self' },
            { label: 'Contact', href: '/contact', target: '_self' }
        ]
    }
};

export const EmptySubLinksFlyout: Story = {
    args: {
        variant: 'sublinks',
        triggerLabel: 'Menu',
        linkItems: []
    }
};

export const NavigationFlyouts: Story = {
    render: () => {
        const navigation = document.createElement('nav');
        navigation.className = `
            bg-neutral-100 
            rounded 
            m-8
            h-[4.5rem] 
            flex 
            items-center 
            justify-between 
            px-6 
        `;

        const leftNavContainer = document.createElement('div');
        leftNavContainer.className = 'flex items-center space-x-4';

        const logo = document.createElement('div');
        logo.className = 'text-xl font-bold mr-8';
        logo.textContent = 'LOGO';

        const searchFlyoutContainer = document.createElement('div');
        searchFlyoutContainer.className = 'relative';
        const searchFlyout = createFlyout({
            variant: 'search',
            triggerLabel: 'Search',
            searchProps: {
                placeholder: 'Search products...',
                results: [
                    { label: 'Product 1', href: '/product1' },
                    { label: 'Product 2', href: '/product2' },
                    { label: 'Product 3', href: '/product3' }
                ]
            }
        });
        searchFlyoutContainer.appendChild(searchFlyout);

        const subLinksFlyoutContainer = document.createElement('div');
        subLinksFlyoutContainer.className = 'relative';
        const subLinksFlyout = createFlyout({
            variant: 'sublinks',
            triggerLabel: 'Zeitschriften',
            linkItems: [
                { label: 'FOCUS', href: '/', target: '_self' },
                { label: 'FOCUS MONEY', href: '/about', target: '_self' },
                { label: 'FOCUS GESUNDHEIT', href: '/contact', target: '_self' }
            ]
        });
        subLinksFlyoutContainer.appendChild(subLinksFlyout);

        leftNavContainer.appendChild(logo);
        leftNavContainer.appendChild(searchFlyoutContainer);
        leftNavContainer.appendChild(subLinksFlyoutContainer);

        navigation.appendChild(leftNavContainer);

        return navigation;
    },
    parameters: {
        layout: 'fullscreen',
        viewport: {
            defaultViewport: 'desktop'
        }
    }
};


