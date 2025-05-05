import { ImageArgs } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createImage } from './Image';

const meta: Meta<ImageArgs> = {
  title: 'Components (Atoms)/Image',
  tags: ['!autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A responsive image component that maintains specific aspect ratios while providing proper accessibility features.',
      },
    },
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    ratio: {
      control: 'select',
      options: ['1:1', '4:3', '16:9'],
      description: 'Aspect ratio of the image',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image. Should be descriptive for screen readers.',
      table: {
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
  },
  render: (args) => {
    const container = document.createElement('div');
    container.className = 'flex gap-4 w-full';

    const image = createImage(args);

    const ratioBox = document.createElement('div');
    ratioBox.className = `aspect-${
      args.ratio === '16:9' ? 'video' : args.ratio === '4:3' ? '4/3' : 'square'
    } h-48 bg-secondary-interaction rounded-lg flex items-center justify-center text-white font-medium`;
    ratioBox.textContent = args.ratio;
    ratioBox.setAttribute('aria-hidden', 'true');

    container.appendChild(image);
    container.appendChild(ratioBox);

    return container;
  },
};

export default meta;
type Story = StoryObj<ImageArgs>;

export const Square: Story = {
  args: {
    src: '/image.png',
    ratio: '1:1',
    alt: 'Square format image',
  },
};

export const Standard: Story = {
  args: {
    src: '/image.png',
    ratio: '4:3',
    alt: 'Standard format image',
  },
};

export const Widescreen: Story = {
  args: {
    src: '/image.png',
    ratio: '16:9',
    alt: 'Widescreen format image',
  },
};

export const AllFormats: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'flex flex-col gap-8';

    const configurations = [
      { src: '/image.png', ratio: '1:1' as const },
      { src: '/image.png', ratio: '4:3' as const },
      { src: '/image.png', ratio: '16:9' as const },
    ];

    configurations.forEach(({ src, ratio }) => {
      const rowContainer = document.createElement('div');
      rowContainer.className = 'flex gap-4 w-full';

      const image = createImage({
        src,
        ratio,
        alt: `${ratio} format image`,
      });

      const ratioBox = document.createElement('div');
      ratioBox.className = `aspect-${
        ratio === '16:9' ? 'video' : ratio === '4:3' ? '4/3' : 'square'
      } h-48 bg-secondary-interaction rounded-lg flex items-center justify-center text-white font-medium`;
      ratioBox.textContent = ratio;
      ratioBox.setAttribute('aria-hidden', 'true');

      rowContainer.appendChild(image);
      rowContainer.appendChild(ratioBox);

      container.appendChild(rowContainer);
    });

    return container;
  },
};
