import { ImageArgs } from '@/stories/types';

const ratioClasses = {
  '1:1': 'aspect-square',
  '4:3': 'aspect-4/3',
  '16:9': 'aspect-video',
};

/**
 * Creates an image component with specified aspect ratio
 * @param {ImageArgs} props - The configuration options
 * @returns {HTMLElement} A div container with the image
 */
export const createImage = ({ src, ratio, alt = '' }: ImageArgs) => {
  const imageWrapper = document.createElement('div');
  imageWrapper.className = `h-48 ${ratioClasses[ratio]}`;

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.className = 'w-full h-full object-cover rounded-lg';
  img.setAttribute('loading', 'lazy');

  imageWrapper.appendChild(img);
  return imageWrapper;
};
