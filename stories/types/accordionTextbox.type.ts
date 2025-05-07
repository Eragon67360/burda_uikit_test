/**
 * @interface TextboxArgs
 * @description Configuration options for the expandable/collapsible textbox component
 */
export type TextboxArgs = {
  /**
   * Text displayed on the expand button when content is collapsed
   * @default 'See more'
   * @example 'Show details'
   * @category Props
   */
  expandText?: string;

  /**
   * Text displayed on the collapse button when content is expanded
   * @default 'See less'
   * @example 'Hide details'
   * @category Props
   */
  collapseText?: string;

  /**
   * HTML content to be displayed within the expandable section
   * @default ''
   * @category Props
   */
  content?: string;

  /**
   * Additional CSS classes to be applied to the wrapper element
   * @default ''
   * @category Props
   */
  className?: string;

  /**
   * Custom chevron icon SVG string to replace the default one
   * @default IconRegistry[IconCategory.SYSTEM].chevronDown
   * @category Props
   */
  chevronIcon?: string;
};
