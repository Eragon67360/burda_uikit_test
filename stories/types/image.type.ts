/**
 * @interface ImageArgs
 * @description Configuration options for creating an image component with specific aspect ratio
 */
export type ImageArgs = {
  /**
   * The source URL of the image
   * @required
   * @example
   * src: '/path/to/image.jpg'
   */
  src: string;

  /**
   * The aspect ratio of the image
   * @required
   * @example
   * ratio: '16:9'
   */
  ratio: '1:1' | '4:3' | '16:9';

  /**
   * Alternative text for the image
   * @default ''
   * @example
   * alt: 'A beautiful landscape'
   */
  alt?: string;
};
