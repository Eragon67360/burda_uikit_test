/**
 * @enum {string} ButtonCTAVariant
 * @description Defines the available visual variants for the ButtonCTA component
 */
export enum ButtonCTAVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  LARGE = 'large',
  LARGE_LIGHT = 'large_light',
  LARGE_SUBSCRIPTION = 'large_subscription',
  LARGE_CART_PAY = 'large_cart_pay',
  LARGE_LOGIN = 'large_login',
}

/**
 * @interface ButtonCTAArgs
 * @description Configuration options for creating a ButtonCTA component
 */
export type ButtonCTAArgs = {
  /**
   * Visual style variant of the button
   * @required
   */
  variant: ButtonCTAVariant;

  /**
   * Text label displayed on the button
   * @required
   */
  label: string;

  /**
   * Optional icon identifier from IconRegistry
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Controls icon position relative to label
   * @default false
   */
  iconLeft?: boolean;

  /**
   * Indicates if button is nested within another component
   * @default false
   */
  nested?: boolean;

  /**
   * Controls button disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional CSS classes for custom styling
   * @default undefined
   */
  classNames?: string | undefined;

  /**
   * Click event handler
   * @default () => {}
   */
  onClick?: () => void;
};
