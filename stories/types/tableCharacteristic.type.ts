import { jsx } from 'storybook/internal/theming';

/**
 * @interface TableCharacteristicCell
 * @description Represents a single cell in the characteristic table that can contain text or an icon
 */
export type TableCharacteristicCell = {
  /**
   * The content to display in the cell (text or icon)
   * @required
   * @example
   * content: 'Cell content'
   */
  content: string | jsx.JSX.Element;

  /**
   * Indicates if the content should be rendered as an icon
   * @default false
   * @example
   * isIcon: true
   */
  isIcon?: boolean;
};

/**
 * @interface TableCharacteristicArgs
 * @description Configuration options for creating a characteristic table
 */
export type TableCharacteristicArgs = {
  /**
   * Array of column header labels
   * @required
   * @example
   * headers: ['Column 1', 'Column 2']
   */
  headers: string[];

  /**
   * Two-dimensional array representing table rows and cells
   * @required
   * @example
   * rows: [[{ content: 'Cell 1' }, { content: 'Cell 2', isIcon: true }]]
   */
  rows: TableCharacteristicCell[][];
};
