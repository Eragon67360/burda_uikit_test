// Showcase.stories.ts
import type { Meta, StoryObj } from '@storybook/html';
import { createShowcase, ShowcaseArgs } from './Showcase';
import { sampleBigImages, sampleSmallImages } from '@/stories/assets/sampleImages';

const meta: Meta<ShowcaseArgs> = {
  title: 'Components (Organisms)/Header/Slideshow',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isSmall: {
      control: { type: 'boolean' },
      description: 'Small slideshow (vertically compact)',
    },
    duration: {
      control: { type: 'number' },
      description: 'Duration of each slide in seconds',
    },
    isPlaying: {
      control: { type: 'boolean' },
      description: 'Initial playing state of the slideshow',
    },
    images: {
      control: { type: 'object' },
      description: 'Array of image sources with mobile, tablet, and desktop variants',
    },
  },
  args: {
    isSmall: false,
    images: sampleBigImages,
  },
  render: (args) => {
    const container = document.createElement('div');
    container.className = 'container w-[100dvw] max-w-[90rem] mx-auto overflow-hidden';
    container.style.height = 'auto';
    const { element } = createShowcase(args);
    container.appendChild(element);
    return container;
  },
};

export default meta;
type Story = StoryObj<ShowcaseArgs>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    images: sampleBigImages,
    duration: 5,
    isPlaying: true,
  },
};

export const Paused: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    images: sampleBigImages,
    duration: 5,
    isPlaying: false,
  },
};

export const LongerDuration: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    images: sampleBigImages,
    duration: 10,
    isPlaying: true,
  },
};

export const HeroSmall: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    isSmall: true,
    images: sampleSmallImages,
    duration: 10,
    isPlaying: true,
  },
};

export const MobileDefault: Story = {
  args: {
    images: sampleBigImages,
    duration: 5,
    isPlaying: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
