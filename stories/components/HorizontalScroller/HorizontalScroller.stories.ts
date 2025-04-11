import type { Meta, StoryObj } from '@storybook/html';
import { createHorizontalScroller, HorizontalScrollerArgs } from './HorizontalScroller';

const meta: Meta<HorizontalScrollerArgs> = {
  title: 'Components (Organisms)/HorizontalScroller',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
    docs: {},
  },
  argTypes: {
    elements: {
      control: { type: 'object' },
      description: 'Array of elements to be displayed in the scroller',
    },
    currentPage: {
      control: { type: 'number' },
      description: 'Current page of the scroller',
    },
    showControls: {
      control: { type: 'boolean' },
      description: 'Show or hide the controls',
    },
    horizontalScrollContainerPadding: {
      control: { type: 'text' },
      description: 'Padding for the horizontal scroll container',
    },
  },
  render: createHorizontalScroller,
};

const sampleElement = (index: number) => {
  const el = document.createElement('div');
  el.className = 'bg-secondary-extra-light size-40 flex items-center justify-center rounded-md';
  el.textContent = `${index}`;
  return el;
};

export default meta;
type Story = StoryObj<HorizontalScrollerArgs>;

export const DefaultHorizontalScroller: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    backgrounds: {
      default: 'White',
    },
  },
  args: {
    elements: [sampleElement(1), sampleElement(2), sampleElement(3), sampleElement(4), sampleElement(5), sampleElement(6)],
    currentPage: 1,
    showControls: true,
    horizontalScrollContainerPadding: '32px',
    backgroundColor: 'gray',
  },
};

export const HorizontalScrollerWithoutControls: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    elements: [sampleElement(1), sampleElement(2), sampleElement(3), sampleElement(4), sampleElement(5), sampleElement(6)],
    currentPage: 1,
    showControls: false,
    horizontalScrollContainerPadding: '32px',
  },
};

export const DefaultHorizontalScrollerWithoutPadding: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    elements: [sampleElement(1), sampleElement(2), sampleElement(3), sampleElement(4), sampleElement(5), sampleElement(6)],
    currentPage: 1,
    showControls: true,
  },
};

export const HorizontalScrollerWithGrayBackground: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    backgrounds: {
      default: 'White',
    },
  },
  args: {
    elements: [sampleElement(1), sampleElement(2), sampleElement(3), sampleElement(4), sampleElement(5), sampleElement(6)],
    currentPage: 1,
    showControls: true,
    horizontalScrollContainerPadding: '32px',
    backgroundColor: 'gray',
  },
};
