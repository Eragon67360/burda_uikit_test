import type { Meta, StoryObj } from '@storybook/html';
import { createFlyout, FlyoutArgs } from './Flyout';
import { IconRegistry, IconCategory } from '../../../assets/icons';

const meta: Meta<FlyoutArgs> = {
    title: 'Components (Organisms)/Overlay/Flyout',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        items: {
            control: 'object',
            description: 'Array of flyout items with icon, title, and description'
        },
        label: {
            control: 'text',
            description: 'Label visible on the button'
        },
        icon: {
            control: { type: 'select' },
            options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
            description: 'Select an icon',
        },
    },
    render: (args) => createFlyout(args)
};

export default meta;
type Story = StoryObj<FlyoutArgs>;

export const Default: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'Desktop',
        },
        layout: 'fullscreen',
    },
    args: {
        label: 'Abo-Vorteile',
        items: [
            {
                icon: 'history',
                title: 'Pünktliche Lieferung',
                description: 'Sie bekommen Ihre Wunschzeitschrift pünktlich nach Hause geliefert.'
            },
            {
                icon: 'laptop',
                title: 'Direkt vom Verlag',
                description: 'Sie erhalten Ihre Wunschzeitschrift direkt vom Verlagshaus, ohne Zwischenhändler.'
            },
            {
                icon: 'documentHand',
                title: 'E-Paper zum Sonderpreis',
                description: 'Die digitale Ausgabe ist günstiger als die Printversion. Sie sparen bei einer Kombination aus Print & Digital.'
            }
        ]
    }
};

export const ScrollableBackground: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'Desktop',
        },
        layout: 'fullscreen'
    },
    render: (args) => {
        // Create a container with 300vh height to enable scrolling
        const scrollContainer = document.createElement('div');
        scrollContainer.style.height = '300vh';
        scrollContainer.style.position = 'relative';

        // Add some content to make scrolling meaningful
        const topContent = document.createElement('div');
        topContent.style.height = '100vh';
        topContent.style.backgroundColor = '#f0f0f0';
        topContent.innerHTML = '<h1 style="text-align: center; padding-top: 50px;">Scroll down to see Flyout behavior</h1>';

        const middleContent = document.createElement('div');
        middleContent.style.height = '100vh';
        middleContent.style.backgroundColor = '#e0e0e0';
        middleContent.innerHTML = '<h2 style="text-align: center; padding-top: 50px;">Scrolling through content</h2>';

        const bottomContent = document.createElement('div');
        bottomContent.style.height = '100vh';
        bottomContent.style.backgroundColor = '#d0d0d0';
        bottomContent.innerHTML = '<h2 style="text-align: center; padding-top: 50px;">Bottom of the page</h2>';

        // Create the flyout and position it
        const flyout = createFlyout(args);
        flyout.style.position = 'fixed';
        flyout.style.zIndex = '100';

        // Append all elements
        scrollContainer.appendChild(topContent);
        scrollContainer.appendChild(middleContent);
        scrollContainer.appendChild(bottomContent);
        scrollContainer.appendChild(flyout);

        return scrollContainer;
    }
};

export const MobileScrollable: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        },
        layout: 'fullscreen',
    },
    render: (args) => {
        // Create a mobile-specific container
        const mobileContainer = document.createElement('div');
        mobileContainer.style.width = '100%';
        mobileContainer.style.height = '100%';
        mobileContainer.style.overflow = 'auto';
        mobileContainer.style.position = 'relative';
        mobileContainer.style.margin = '0 auto';

        // Create scrollable content
        const scrollContent = document.createElement('div');
        scrollContent.style.backgroundColor = '#ffffff';

        // Add sections to create scrollable content
        const sections = ['First Section', 'Second Section', 'Third Section', 'Fourth Section'];
        sections.forEach((sectionTitle, index) => {
            const section = document.createElement('div');
            section.style.height = '100dvh';
            section.style.display = 'flex';
            section.style.justifyContent = 'center';
            section.style.alignItems = 'center';
            section.style.fontSize = '24px';
            section.style.backgroundColor = `hsl(0, 0%, ${60 + (index * 3)}%)`;
            section.textContent = sectionTitle;
            scrollContent.appendChild(section);
        });

        // Create the flyout and position it
        const flyout = createFlyout(args);
        flyout.style.zIndex = '100';

        // Assemble the mobile container
        mobileContainer.appendChild(scrollContent);
        mobileContainer.appendChild(flyout);

        return mobileContainer;
    }
};


ScrollableBackground.args = {
    label: 'Abo-Vorteile',
    items: [
        {
            icon: 'history',
            title: 'Pünktliche Lieferung',
            description: 'Sie bekommen Ihre Wunschzeitschrift pünktlich nach Hause geliefert.'
        },
        {
            icon: 'laptop',
            title: 'Direkt vom Verlag',
            description: 'Sie erhalten Ihre Wunschzeitschrift direkt vom Verlagshaus, ohne Zwischenhändler.'
        },
        {
            icon: 'documentHand',
            title: 'E-Paper zum Sonderpreis',
            description: 'Die digitale Ausgabe ist günstiger als die Printversion. Sie sparen bei einer Kombination aus Print & Digital.'
        }
    ]
};

MobileScrollable.args = {
    label: 'Abo-Vorteile',
    items: [
        {
            icon: 'history',
            title: 'Pünktliche Lieferung',
            description: 'Sie bekommen Ihre Wunschzeitschrift pünktlich nach Hause geliefert.'
        },
        {
            icon: 'laptop',
            title: 'Direkt vom Verlag',
            description: 'Sie erhalten Ihre Wunschzeitschrift direkt vom Verlagshaus, ohne Zwischenhändler.'
        },
        {
            icon: 'documentHand',
            title: 'E-Paper zum Sonderpreis',
            description: 'Die digitale Ausgabe ist günstiger als die Printversion. Sie sparen bei einer Kombination aus Print & Digital.'
        }
    ]
};