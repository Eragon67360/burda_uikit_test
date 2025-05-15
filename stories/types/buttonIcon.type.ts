import { IconCategory, IconRegistry } from '../assets/icons';

/**
 * @enum {string}
 * @description Defines the available size variants for the ButtonIcon component
 */
export enum ButtonIconVariant {
  /** Small button variant (40px x 40px) */
  SMALL = 'small',
  /** Big button variant (44px x 44px) */
  BIG = 'big',
}

/**
 * @interface ButtonIconArgs
 * @description Configuration options for creating a ButtonIcon component
 */
export type ButtonIconArgs = {
  /**
   * @property {ButtonIconVariant} variant - Size variant of the button
   * @required
   */
  variant: ButtonIconVariant;

  /**
   * @property {string} icon - Icon name from the system icons registry
   * @required
   * @example "close"
   */
  icon: keyof (typeof IconRegistry)[IconCategory.SYSTEM];

  /**
   * @property {boolean} disabled - Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * @property {'neutral-100' | 'neutral-200'} backgroundColor - Background color variant
   * @default 'neutral-100'
   * @description Only applies to BIG variant
   */
  backgroundColor?: 'neutral-100' | 'neutral-200';

  /**
   * @property {Function} onClick - Click event handler
   * @default () => {}
   */
  onClick?: () => void;
} & AccessibilityArgs;

/**
 * @interface AccessibilityArgs
 * @description Interface for accessibility-related properties
 */
type AccessibilityArgs = {
  /**
   * @property {string} ariaLabel - Accessible label for the button
   * @description Provides screen readers with a descriptive label for the button
   * @example "Close dialog"
   */
  ariaLabel?: string;
};
