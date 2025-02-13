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
        return createSlideProgress(args);
    },
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