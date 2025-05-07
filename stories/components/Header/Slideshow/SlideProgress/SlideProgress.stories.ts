import { SlideProgressArgs } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createSlideProgress } from './SlideProgress';

const meta: Meta<SlideProgressArgs> = {
  title: 'Components (Atoms)/Slideshow/SlideProgress',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A responsive progress indicator for slideshows featuring multiple steps, play/pause control, and interactive navigation. Supports automatic progression with customizable durations and manual navigation through step clicks.',
      },
    },
    layout: 'centered',
  },
  args: {
    isPlaying: true,
    currentStep: 0,
  },
  argTypes: {
    totalSteps: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of progress sections to display',
      type: { name: 'number', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    duration: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Duration in seconds for each section to complete',
      type: { name: 'number', required: true },
      table: {
        category: ArgsCategory.PROPS,
        type: { summary: 'number' },
      },
    },
    isPlaying: {
      control: 'boolean',
      description: 'Controls the play/pause state of the progress',
      table: {
        category: ArgsCategory.PROPS,
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    currentStep: {
      control: 'number',
      description: 'Current active step index',
      table: {
        category: ArgsCategory.PROPS,
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    onPlayPauseClick: {
      action: 'playPauseClicked',
      description: 'Callback triggered when play/pause button is clicked',
      table: {
        category: ArgsCategory.EVENTS,
      },
    },
    onStepComplete: {
      action: 'stepCompleted',
      description: 'Callback triggered when a step completes its progress',
      table: {
        category: ArgsCategory.EVENTS,
      },
    },
    onStepClick: {
      action: 'stepClicked',
      description: 'Callback triggered when a step is clicked',
      table: {
        category: ArgsCategory.EVENTS,
      },
    },
  },
  render: (args) => {
    const { element } = createSlideProgress(args);
    return element;
  },
};

export default meta;
type Story = StoryObj<SlideProgressArgs>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default configuration with three steps and three-second duration per step. Automatically starts playing on mount.',
      },
    },
  },
  args: {
    totalSteps: 3,
    duration: 3,
    isPlaying: true,
  },
};

export const PausedState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Progress indicator in paused state. Progress bars remain static until play is resumed. Useful for manual control or initial loading states.',
      },
    },
  },
  args: {
    totalSteps: 3,
    duration: 3,
    isPlaying: false,
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
        story:
          'Extended configuration with seven steps and longer five-second durations. Suitable for presentations with more detailed content requiring longer viewing times.',
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
        story:
          'Fast-paced configuration with one-second transitions. Ideal for quick previews or highlight reels where rapid content rotation is desired.',
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
        story:
          "Minimal setup with a single progress step. Demonstrates the component's behavior with minimal content and can be used for simple loading indicators.",
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
        story:
          'Interactive demonstration showcasing automatic play/pause toggling and step navigation. The play state automatically toggles after 2 seconds to demonstrate the transition.',
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
