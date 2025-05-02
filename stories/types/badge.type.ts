/**
 * @interface BadgeProps
 * @description Configuration options for creating a badge element
 */
export interface BadgeProps {
  /**
   * Text to display inside the badge
   * @required
   * @example
   * badgeLabel: 'New'
   */
  badgeLabel: string;

  /**
   * Size of the badge in pixels
   * @required
   * @example
   * size: 42
   */
  size: number;

  /**
   * Color variant of the badge
   * @required
   * @default 'primary'
   */
  color: 'primary' | 'secondary';

  /**
   * Additional CSS classes to apply to the badge
   * @optional
   * @example
   * classNames: 'translate-x-1/2 translate-y-1/2'
   */
  classNames?: string;

  /**
   * Accessible label for screen readers
   * @optional
   * @example
   * ariaLabel: 'Five unread messages'
   */
  ariaLabel?: string;
}
