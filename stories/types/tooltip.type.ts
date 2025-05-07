/**
 * @interface TooltipArgs
 * @description Configuration options for creating a tooltip component
 */
export type TooltipArgs = {
  /**
   * Content to be displayed inside the tooltip
   * @required
   */
  content: string | HTMLElement;

  /**
   * Icon to be displayed as the trigger for the tooltip
   * @default IconRegistry[IconCategory.SYSTEM].info
   */
  triggerIcon?: string;

  /**
   * Position of the tooltip relative to the trigger element
   * @default 'top'
   */
  position?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * Additional CSS classes for custom styling
   */
  classNames?: string | undefined;
} & AccessibilityArgs;

/**
 * @interface AccessibilityArgs
 * @description Accessibility-related properties for the tooltip
 */
type AccessibilityArgs = {
  /**
   * Accessible label for the tooltip trigger button
   */
  ariaLabelTrigger?: string;

  /**
   * Accessible label for the close button
   */
  ariaLabelClose?: string;

  /**
   * ID of the element controlled by the tooltip
   */
  ariaControlsId?: string;
};
