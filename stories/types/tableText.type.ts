import { jsx } from 'storybook/internal/theming';

/**
 * @interface TextCell
 * @description Represents a single cell in the table with content that can be either string or JSX element
 */
export type TableTextCell = {
  /**
   * The content to display in the cell
   * @required
   * @example
   * content: 'Cell content'
   */
  content: string | jsx.JSX.Element;
};

/**
 * @interface TextArgs
 * @description Configuration options for creating a text table
 */
export type TableTextArgs = {
  /**
   * Two-dimensional array representing table rows and cells
   * @required
   * @example
   * rows: [[{ content: 'Cell 1' }, { content: 'Cell 2' }]]
   */
  rows: TableTextCell[][];
};
