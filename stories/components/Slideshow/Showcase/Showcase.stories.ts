// Showcase.stories.ts
import type { Meta, StoryObj } from '@storybook/html';
import { createShowcase, ShowcaseArgs } from './Showcase';

const meta: Meta<ShowcaseArgs> = {
    title: 'Components (Molecules)/Slideshow/Showcase',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        duration: {
            control: { type: 'number' },
            description: 'Duration of each slide in seconds',
        },
        isPlaying: {
            control: { type: 'boolean' },
            description: 'Initial playing state of the slideshow',
        },
    },
    render: (args) => {
        const { element } = createShowcase(args);
        return element
    }
};

export default meta;
type Story = StoryObj<ShowcaseArgs>;

const sampleImages = [
    'https://picsum.photos/id/7/800/600.webp',
    'https://picsum.photos/id/10/800/600.webp',
    'https://picsum.photos/id/20/800/600.webp',
    'https://picsum.photos/id/15/800/600.webp',
];

export const Default: Story = {
    args: {
        images: sampleImages,
        duration: 5,
        isPlaying: true
    },
};

export const Paused: Story = {
    args: {
        images: sampleImages,
        duration: 5,
        isPlaying: false
    },
};

export const LongerDuration: Story = {
    args: {
        images: sampleImages,
        duration: 10,
        isPlaying: true
    },
};
