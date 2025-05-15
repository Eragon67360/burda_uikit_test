import { IconCategory, IconRegistry } from '@/assets/icons';

/**
 * @interface IconArgs
 * @description Configuration options for creating an SVG icon element
 */
export type IconArgs = {
  /**
   * The name of the icon to display from the system icon registry
   * @required
   * @example
   * name: 'headphones'
   */
  name: keyof (typeof IconRegistry)[IconCategory.SYSTEM];

  /**
   * Size of the icon in pixels. Applied to both width and height
   * @default 20
   * @example
   * size: 24
   */
  size?: number;

  /**
   * Additional CSS classes for custom styling. Multiple classes should be space-separated
   * @default undefined
   * @example
   * classNames: 'text-blue-500 hover:text-blue-600'
   */
  classNames?: string | undefined;
} & AccessibilityArgs;

/**
 * @interface AccessibilityArgs
 * @description Accessibility configuration options for the icon element
 */
type AccessibilityArgs = {
  /**
   * ARIA role for the icon element. Use 'img' for meaningful icons or 'button' for interactive ones
   * @default undefined
   * @example
   * role: 'img'
   */
  role?: string | undefined;

  /**
   * Accessible label for the icon. Required when role is 'img' or the icon is interactive
   * @default undefined
   * @example
   * ariaLabel: 'Close dialog'
   */
  ariaLabel?: string | undefined;

  /**
   * Whether the icon should be focusable. Ignored if ariaHidden is true
   * @default false
   * @example
   * focusable: true
   */
  focusable?: boolean;

  /**
   * Whether the icon should be hidden from assistive technologies
   * @default false
   * @example
   * ariaHidden: true
   */
  ariaHidden?: boolean;

  /**
   * Alternative text for the icon (legacy support)
   * @deprecated Use ariaLabel instead
   * @default undefined
   */
  alternativeText?: string | undefined;
};
