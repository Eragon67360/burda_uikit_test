import type { Meta, StoryObj } from '@storybook/html';
import { createSlideProgress, SlideProgressArgs } from './SlideProgress';

const meta: Meta<SlideProgressArgs> = {
    title: 'Components (Atoms)/Slideshow/SlideProgress',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        totalSteps: {
            control: { type: 'number', min: 1, max: 10 },
            description: 'Number of progress sections to display',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '3' },
            },
        },
        duration: {
            control: { type: 'number', min: 1, max: 10 },
            description: 'Duration in seconds for each section to complete',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '3' },
            },
        },
        isPlaying: {
            control: 'boolean',
            description: 'Initial play state of the progress',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
        },
        onPlayPauseClick: {
            action: 'playPauseClicked',
            description: 'Callback function when play/pause button is clicked',
        },
        onStepComplete: {
            action: 'stepCompleted',
            description: 'Callback function when a step is completed',
        },
    },
    render: (args) => {
        const { element } = createSlideProgress(args);
        return element;
    }
};

export default meta;
type Story = StoryObj<SlideProgressArgs>;

export const Default: Story = {
    args: {
        totalSteps: 3,
        duration: 3,
        isPlaying: true,
    },
};

export const PausedState: Story = {
    args: {
        totalSteps: 3,
        duration: 3,
        isPlaying: false,
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows the progress in a paused state. Useful for when you want to start the slideshow manually.',
            },
        },
    },
};

export const LongPresentation: Story = {
    args: {
        totalSteps: 7,
        duration: 5,
        isPlaying: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'Configuration for longer presentations with more steps and longer duration per slide.',
            },
        },
    },
};

export const QuickTransitions: Story = {
    args: {
        totalSteps: 5,
        duration: 1,
        isPlaying: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'Rapid transitions between slides, suitable for quick previews or dynamic content.',
            },
        },
    },
};

export const MinimalConfiguration: Story = {
    args: {
        totalSteps: 1,
        duration: 2,
        isPlaying: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'Minimal configuration with a single step, demonstrating the component\'s behavior with minimal content.',
            },
        },
    },
};

export const InteractiveDemo: Story = {
    args: {
        totalSteps: 4,
        duration: 2,
        isPlaying: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'Interactive demonstration with automatic play/pause toggling.',
            },
        },
    },
    play: async ({ canvasElement }) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const playPauseButton = canvasElement.querySelector('button');
        if (playPauseButton) {
            playPauseButton.click();
        }
    },
};