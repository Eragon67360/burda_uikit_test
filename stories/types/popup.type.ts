/**
 * @typedef {('error' | 'success' | 'info')} PopupVariant
 * Defines the visual style and context of the popup
 */
export type PopupVariant = 'error' | 'success' | 'info';

/**
 * @typedef {('top-right' | 'top' | 'top-left' | 'bottom-right' | 'bottom' | 'bottom-left')} PopupPosition
 * Defines where the popup will appear on the screen
 */
export type PopupPosition = 'top-right' | 'top' | 'top-left' | 'bottom-right' | 'bottom' | 'bottom-left';

/**
 * @interface PopupAction
 * @description Configuration for an optional action button within the popup
 */
export type PopupAction = {
  /**
   * Text to display on the action button
   * @required
   */
  label: string;
  /**
   * Icon SVG string to display alongside the label
   * @required
   */
  icon: string;
  /**
   * URL the action button will navigate to
   * @required
   */
  href: string;
};

/**
 * @interface PopupArgs
 * @description Core configuration options for creating a popup
 */
export type PopupArgs = {
  /**
   * Visual style variant of the popup
   * @required
   */
  variant: PopupVariant;
  /**
   * Screen position where the popup will appear
   * @required
   */
  position: PopupPosition;
  /**
   * Main heading text of the popup
   * @required
   */
  title: string;
  /**
   * Detailed message text of the popup
   * @required
   */
  description: string;
  /**
   * Optional action button configuration
   * @optional
   */
  action?: PopupAction;
  /**
   * Optional callback function when popup closes
   * @optional
   */
  onClose?: () => void;
};

/**
 * @interface PopupTriggerArgs
 * @description Configuration options for creating a popup with a trigger button. Extends PopupArgs with trigger-specific properties.
 * @extends PopupArgs
 */
export type PopupTriggerArgs = PopupArgs & {
  /**
   * Text to display on the trigger button that shows the popup
   * @optional
   * @default "Show Toast"
   * @example
   * triggerLabel: "Show Error Message"
   */
  triggerLabel?: string;

  /**
   * Visual style variant for the trigger button
   * @optional
   * @default "primary"
   * @example
   * triggerVariant: "secondary"
   */
  triggerVariant?: 'primary' | 'secondary';
};
