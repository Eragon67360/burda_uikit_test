import type { Meta, StoryObj } from '@storybook/html';
import { ImageArgs, createImage } from './Image';

const meta: Meta<ImageArgs> = {
    title: 'Components (Atoms)/Image',

    parameters: {
        layout: 'padded',
    },
    argTypes: {
        src: {
            control: 'text',
            description: 'Image source'
        },
        ratio: {
            control: 'select',
            options: ['1:1', '4:3', '16:9'],
            description: 'Aspect ratio of the image'
        },
        alt: {
            control: 'text',
            description: 'Alternative text for the image'
        }
    },
    render: (args) => createImage(args)
};

export default meta;
type Story = StoryObj<ImageArgs>;

export const Square: Story = {
    args: {
        src: '/image.png',
        ratio: '1:1',
        alt: 'Square format image'
    }
};

export const Standard: Story = {
    args: {
        src: '/image.png',
        ratio: '4:3',
        alt: 'Standard format image'
    }
};

export const Widescreen: Story = {
    args: {
        src: '/image.png',
        ratio: '16:9',
        alt: 'Widescreen format image'
    }
};

export const AllFormats: Story = {
    render: () => {
        const container = document.createElement('div');
        container.className = 'flex flex-col gap-8';

        const configurations = [
            { src: '/image.png', ratio: '1:1' as const },
            { src: '/image.png', ratio: '4:3' as const },
            { src: '/image.png', ratio: '16:9' as const }
        ];

        configurations.forEach(({ src, ratio }) => {
            container.appendChild(
                createImage({
                    src,
                    ratio,
                    alt: `${ratio} format image`
                })
            );
        });

        return container;
    }
};
