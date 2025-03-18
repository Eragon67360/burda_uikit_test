import type { Meta, StoryObj } from '@storybook/html';
import { createNavigation, NavigationArgs } from './Navigation';
import { IconRegistry, IconCategory } from '@/stories/assets/icons';

const meta: Meta<NavigationArgs> = {
    title: 'Components (Molecules)/Navigation',
    tags: ['autodocs'],
    parameters: {
        controls: { expanded: true },
        layout: 'fullscreen',
    },
    argTypes: {
        logoSrc: {
            control: 'text',
            description: 'Source URL for the logo image',
            defaultValue: '/burda_logo.png'
        },
        logoAltText: {
            control: 'text',
            description: 'Source URL for the logo image',
            defaultValue: '/burda_logo.png'
        },
        hasFlyoutLinks: {
            control: 'boolean',
            description: 'Enable dropdown menu',
            defaultValue: false
        },
        has2LinesNavigation: {
            control: 'boolean',
            description: 'Enable two-line navigation layout',
            defaultValue: false
        },
        flyoutLabel: {
            control: 'text',
            description: 'Label for the flyout menu',
            defaultValue: 'Menu',
            if: { arg: 'hasFlyoutLinks', eq: true }
        },
        flyoutItems: {
            control: 'object',
            description: 'List of items in the flyout menu',
            defaultValue: [],
            if: { arg: 'hasFlyoutLinks', eq: true }
        },
        navigationItems: {
            control: 'object',
            description: 'List of navigation items',
            defaultValue: []
        },
        hasSearch: {
            control: 'boolean',
            description: 'Enable search functionality',
            defaultValue: false
        },
        searchProps: {
            control: 'object',
            description: 'Additional search configuration',
            defaultValue: {},
            if: { arg: 'hasSearch', eq: true }
        },
        loginButtonText: {
            control: 'text',
            description: 'Login button label',
            defaultValue: 'Kundenservice & Login'
        },
        loginButtonIcon: {
            control: { type: 'select' },
            options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
            description: 'Login button icon',
            defaultValue: 'userCircle'
        },
        cartButtonText: {
            control: 'text',
            description: 'Cart button label',
            defaultValue: 'Warenkorb & Kasse'
        },
        cartButtonIcon: {
            control: { type: 'select' },
            options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
            description: 'Cart button icon',
            defaultValue: 'cart'
        },
    },
    render: (args) => createNavigation(args as any)
};

export default meta;
type Story = StoryObj<NavigationArgs>;

export const Desktop: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'desktop',
        },
        layout: 'fullscreen',
    },
    args: {
        logoSrc: '/burda_logo.png',
        logoAltText: 'Burda Logo',
        has2LinesNavigation: false,
        hasFlyoutLinks: true,
        flyoutLabel: 'Zeitschriften',
        flyoutItems: [
            { label: 'FOCUS', href: '/', target: '_blank' },
            { label: 'FOCUS MONEY', href: '/about', target: '_blank' },
            { label: 'FOCUS GESUNDHEIT', href: '/contact', target: '_blank' }
        ],
        navigationItems: [
            { label: 'FOCUS+', href: '/focus', target: '_self' },
            { label: 'Einzelausgaben', href: '/einzelausgaben', target: '_self' }
        ],
        hasSearch: true,
        searchProps: {
            emptyText: 'Keine Ergebnisse gefunden',
            placeholder: 'Suche',
            results: [
                { label: 'Product 1', href: '/product1' },
                { label: 'Product 2', href: '/product2' },
                { label: 'Product 3', href: '/product3' }
            ]
        },
        loginButtonText: 'Kundenservice & Login',
        loginButtonIcon: 'userCircle',
        cartButtonText: 'Warenkorb & Kasse',
        cartButtonIcon: 'cart',
        onClickLoginButton: () => console.log("Login button has been clicked"),
        onClickCartButton: () => console.log("Cart button has been clicked"),
    },
    render: (args) => {
        const scrollContainer = document.createElement('div');
        scrollContainer.style.height = '300vh';
        scrollContainer.style.position = 'relative';

        const topContent = document.createElement('div');
        topContent.style.height = '100vh';
        topContent.style.backgroundColor = '#f0f0f0';
        topContent.innerHTML = '<h1 style="text-align: center; padding-top: 200px;">Scroll down to see Navigation behavior</h1>';

        const middleContent = document.createElement('div');
        middleContent.style.height = '100vh';
        middleContent.style.backgroundColor = '#e0e0e0';
        middleContent.innerHTML = '<h2 style="text-align: center; padding-top: 200px;">Scrolling through content</h2>';

        const bottomContent = document.createElement('div');
        bottomContent.style.height = '100vh';
        bottomContent.style.backgroundColor = '#d0d0d0';
        bottomContent.innerHTML = '<h2 style="text-align: center; padding-top: 200px;">Bottom of the page</h2>';

        scrollContainer.appendChild(topContent);
        scrollContainer.appendChild(middleContent);
        scrollContainer.appendChild(bottomContent);

        const navigation = createNavigation(args);
        scrollContainer.appendChild(navigation);
        return scrollContainer;

    }
};
