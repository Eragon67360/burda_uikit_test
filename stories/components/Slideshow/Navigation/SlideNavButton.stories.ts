import type { Meta, StoryObj } from '@storybook/html';
import { SlideshowNavButtonArgs, createSlideshowNavButton } from './SlideNavButton';

const meta: Meta<SlideshowNavButtonArgs> = {
    title: 'Components (Atoms)/Slideshow/Navigation',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
        },
        viewport: {
            defaultViewport: 'responsive',
            viewports: {
                mobile: {
                    name: 'Mobile',
                    styles: {
                        width: '375px',
                        height: '667px',
                    },
                },
                desktop: {
                    name: 'Desktop',
                    styles: {
                        width: '1440px',
                        height: '900px',
                    },
                },
            },
        },
    },
    argTypes: {
        mode: {
            control: 'radio',
            options: ['previous', 'next'],
            description: 'Direction of the navigation button',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state of the button',
        },
        onClick: {
            action: 'clicked',
            description: 'Click handler',
        },
    },
    render: (args) => createSlideshowNavButton(args),
};

export default meta;
type Story = StoryObj<SlideshowNavButtonArgs>;

export const Next: Story = {
    args: {
        mode: 'next',
        disabled: false,
    },
    parameters: {
        docs: {
            description: {
                story: 'Navigation button that adapts to screen size: 2.75rem on mobile, 3rem on desktop.',
            },
        },
    },
};

export const Previous: Story = {
    args: {
        mode: 'previous',
        disabled: false,
    },
};

export const DisabledNext: Story = {
    args: {
        mode: 'next',
        disabled: true,
    },
};

export const DisabledPrevious: Story = {
    args: {
        mode: 'previous',
        disabled: true,
    },
};

// Add responsive testing stories
export const ResponsiveMobile: Story = {
    args: {
        mode: 'next',
        disabled: false,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile',
        },
    },
};

export const ResponsiveDesktop: Story = {
    args: {
        mode: 'next',
        disabled: false,
    },
    parameters: {
        viewport: {
            defaultViewport: 'desktop',
        },
    },
};
