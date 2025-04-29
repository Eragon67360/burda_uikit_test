/**
 * @interface ButtonLinkArgs
 * @description Configuration options for creating a button-styled link component.
 * Combines the visual styling of a button with the functionality of an anchor element.
 * Supports icons, custom click handling, and various states including disabled.
 */
export type ButtonLinkArgs = {
  /**
   * The text content to be displayed in the button link
   * @required
   * @example
   * label: 'Click me'
   */
  label: string;

  /**
   * The URL that the link points to
   * @default '#'
   * @example
   * href: 'https://example.com'
   */
  href?: string;

  /**
   * Specifies where to open the linked URL
   * @default '_self'
   * @example
   * target: '_blank'
   */
  target?: '_blank' | '_self' | '_parent' | '_top';

  /**
   * The name of the icon to be displayed (must exist in IconRegistry.SYSTEM)
   * @default undefined
   * @example
   * icon: 'arrow-right'
   */
  icon?: string | undefined;

  /**
   * Whether to position the icon on the left side of the label
   * @default false
   * @example
   * iconLeft: true
   */
  iconLeft?: boolean;

  /**
   * Whether the button link is disabled. When true:
   * - Sets aria-disabled="true"
   * - Removes pointer events
   * - Sets href to '#'
   * - Sets tabindex to -1
   * @default false
   * @example
   * disabled: true
   */
  disabled?: boolean;

  /**
   * Additional CSS classes to be applied to the button link
   * @default undefined
   * @example
   * classNames: 'my-custom-class another-class'
   */
  classNames?: string | undefined;

  /**
   * Click event handler for the button link
   * If provided, executes before navigation occurs
   * Can prevent default navigation by calling event.preventDefault()
   * @default () => {}
   * @example
   * onClick: (e) => {
   *   e.preventDefault();
   *   console.log('Clicked!');
   * }
   */
  onClick?: (event: MouseEvent) => void;
};
