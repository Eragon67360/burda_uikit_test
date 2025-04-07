// Showcase.stories.ts
import type { Meta, StoryObj } from '@storybook/html';
import { createShowcase, ShowcaseArgs } from './Showcase';
import { sampleBigImages, sampleSmallImages } from '@/stories/assets/sampleImages';

const meta: Meta<ShowcaseArgs> = {
    title: 'Components (Organisms)/Header/Slideshow',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        isSmall: {
            control: { type: 'boolean' },
            description: 'Small slideshow (vertically compact)'
        },
        duration: {
            control: { type: 'number' },
            description: 'Duration of each slide in seconds',
        },
        isPlaying: {
            control: { type: 'boolean' },
            description: 'Initial playing state of the slideshow',
        },
    },
    args: {
        isSmall: false
    },
    render: (args) => {
        const container = document.createElement('div');
        container.className = 'container w-screen max-w-[90rem] mx-auto';
        container.style.height = 'auto';
        const { element } = createShowcase(args);
        container.appendChild(element);
        return container
    }
};

export default meta;
type Story = StoryObj<ShowcaseArgs>;

export const Default: Story = {
    args: {
        images: sampleBigImages,
        duration: 5,
        isPlaying: true
    },
};

export const Paused: Story = {
    args: {
        images: sampleBigImages,
        duration: 5,
        isPlaying: false
    },
};

export const LongerDuration: Story = {
    args: {
        images: sampleBigImages,
        duration: 10,
        isPlaying: true
    },
};

export const HeroSmall: Story = {
    args: {
        isSmall: true,
        images: sampleSmallImages,
        duration: 10,
        isPlaying: true
    },
};

