/**
 * @interface TagArgs
 * @description Configuration options for creating a tag element
 */
export type TagArgs = {
  /**
   * The text content to display in the tag
   * @required
   * @example
   * text: 'New Feature'
   */
  text: string;

  /**
   * Whether to show the success check icon
   * @default true
   * @example
   * showIcon: true
   */
  showIcon?: boolean;
};
