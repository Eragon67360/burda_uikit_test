/**
 * @interface CartAndPayArgs
 * @description Configuration options for creating a CartAndPay button component.
 * Combines cart functionality with payment action in a single button element.
 */
export type CartAndPayArgs = {
  /**
   * The text content to be displayed in the button
   * @required
   * @example
   * label: 'Cart & Pay'
   */
  label: string;

  /**
   * The name of the icon to be displayed (must exist in IconRegistry.SYSTEM)
   * @required
   * @example
   * icon: 'cart'
   */
  icon: string;

  /**
   * Whether the button is disabled
   * @default false
   * @example
   * disabled: true
   */
  disabled?: boolean;

  /**
   * Array of items in the cart. Affects button styling and displays item count
   * @required
   * @example
   * items: [{id: 1, name: 'Product'}]
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];

  /**
   * Additional CSS classes to be applied to the button
   * @default undefined
   * @example
   * classNames: 'my-custom-class'
   */
  classNames?: string;

  /**
   * Click event handler for the button
   * @required
   * @example
   * onClick: () => handleCartAndPay()
   */
  onClick: () => void;
} & AccessibilityArgs;

/**
 * @interface AccessibilityArgs
 * @description Accessibility configuration options for the CartAndPay component
 */
type AccessibilityArgs = {
  /**
   * Aria label for the cart count badge
   * @default undefined
   * @example
   * ariaLabelCartCount: 'Items in cart'
   */
  ariaLabelCartCount?: string;
};
