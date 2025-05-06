/**
 * @interface SlideshowNavButtonArgs
 * @description Configuration options for creating a slideshow navigation button
 */
export type SlideshowNavButtonArgs = {
  /**
   * Direction of the navigation button
   * @required
   */
  mode: 'previous' | 'next';

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Background color variant of the button
   * @default 'white'
   */
  backgroundColor?: 'white' | 'gray';

  /**
   * Additional CSS classes to apply to the button
   */
  classNames?: string;

  /**
   * Click event handler
   */
  onClick?: () => void;
};
