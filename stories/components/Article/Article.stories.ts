import type { Meta, StoryObj } from '@storybook/html';
import { expect, fn, userEvent, within } from '@storybook/test';
import { createArticle, ArticleArgs } from './Article';

const meta: Meta<ArticleArgs> = {
    title: 'Components (Molecules)/Article',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        controls: { expanded: true },
        a11y: {
            config: {
                rules: [
                    { id: 'image-alt', enabled: true },
                    { id: 'button-name', enabled: true }
                ]
            }
        },
        docs: {
            description: {
                component: 'An article component that displays product information with optional badge and CTA button.'
            }
        }
    },
    argTypes: {
        // Enhanced ArgTypes with more detailed controls
        backgroundColor: {
            control: 'radio',
            options: ['white', 'gray'],
            description: 'Background color of the article',
            table: {
                defaultValue: { summary: 'white' },
                type: { summary: 'white | gray' }
            }
        },
        title: {
            control: 'text',
            description: 'Title of the article',
            table: {
                type: { summary: 'string' }
            }
        },
        image: {
            control: 'text',
            description: 'URL of the article image',
            table: {
                type: { summary: 'string' }
            }
        },
        imageAltText: {
            control: 'text',
            description: 'Alternative text for the image',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Uses title if not provided' }
            }
        },
        buttonLabel: {
            control: 'text',
            description: 'Label text for the CTA button',
            table: {
                type: { summary: 'string' }
            }
        },
        badgeText: {
            control: 'text',
            description: 'Optional badge text. When provided, creates an accessible status badge in the top-left corner.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' }
            }
        },
        onClick: {
            action: 'clicked',
            description: 'Click handler for the article',
            table: {
                type: { summary: '() => void' }
            }
        }
    },
    render: (args) => createArticle(args),
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
        onClick: fn()
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        // Accessibility tests
        const article = canvas.getByRole('article');
        await expect(article).toBeInTheDocument();

        // Image tests
        const image = canvas.getByRole('img');
        await expect(image).toHaveAttribute('alt', args.imageAltText);

        // Button tests
        const button = canvas.getByRole('button');
        await expect(button).toHaveTextContent(args.buttonLabel);

        // Keyboard navigation
        await userEvent.tab();
        await expect(article).toHaveFocus();

        // Click handling
        await userEvent.click(button);
        await expect(args.onClick).toHaveBeenCalled();
    }
};

export const ArticleWithBadge: Story = {
    args: {
        ...DefaultArticle.args,
        badgeText: 'Tipp'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Badge tests
        const badgeContainer = canvas.getByRole('status'); // Now we can use role selector
        await expect(badgeContainer).toBeInTheDocument();

        // Test badge text
        const badgeText = canvas.getByText('Tipp');
        await expect(badgeText).toBeInTheDocument();

        // Test accessibility attributes
        await expect(badgeContainer).toHaveAttribute('role', 'status');
        await expect(badgeContainer).toHaveAttribute('aria-label', 'Tipp');

        // Test visual properties
        await expect(badgeContainer).toHaveClass('bg-primary-interaction');
        await expect(badgeContainer.style.minWidth).toBe('42px');
        await expect(badgeContainer.style.minHeight).toBe('42px');

        // Test badge text styling
        await expect(badgeText).toHaveClass('font-bold');
        await expect(badgeText).toHaveClass('text-copy-small');

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
};

export const AccessibilityChecks: Story = {
    args: {
        ...DefaultArticle.args
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // ARIA attributes
        const article = canvas.getByRole('article');
        await expect(article).toHaveAttribute('aria-label');

        // Focus management
        const button = canvas.getByRole('button');
        await userEvent.tab();
        await expect(article).toHaveFocus();

        await userEvent.tab();
        await expect(button).toHaveFocus();

        // Image accessibility
        const image = canvas.getByRole('img');
        await expect(image).toHaveAttribute('alt');
        await expect(image).toHaveAttribute('loading', 'lazy');
    }
};