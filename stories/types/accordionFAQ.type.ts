/**
 * @interface AccordionItem
 * @description Represents a single item in the FAQ accordion
 */
type AccordionItem = {
  /**
   * The text shown in the accordion header/trigger
   * @category Props
   */
  trigger: string;

  /**
   * The content to be shown when the accordion item is expanded
   * @category Props
   */
  content: string;
};

/**
 * @interface FAQArgs
 * @description Configuration options for the FAQ accordion component
 */
export type FAQArgs = {
  /**
   * Array of accordion items to be displayed
   * @required
   * @category Props
   */
  items: AccordionItem[];

  /**
   * Background color variant for the FAQ component
   * @default 'white'
   * @category Props
   */
  backgroundColor?: 'white' | 'gray';
};
