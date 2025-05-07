/**
 * @interface SelectionListArgs
 * @description Configuration options for creating a radio button selection list
 */
export type SelectionListArgs = {
  /**
   * Array of radio options to display
   * @required
   * @example ['Option 1', 'Option 2', 'Option 3']
   */
  items: string[];

  /**
   * Name attribute for the radio group, used for form submission and accessibility
   * @required
   * @example 'preferences-group'
   */
  name: string;

  /**
   * Currently selected value. Defaults to first item if not specified
   * @default items[0]
   */
  selectedValue?: string;

  /**
   * Background color of the radio set
   * @default 'white'
   */
  backgroundColor?: 'white' | 'gray';

  /**
   * Callback function triggered when selection changes
   * @param {string} value - The newly selected value
   */
  onChange?: (value: string) => void;
};
