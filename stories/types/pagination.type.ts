/**
 * @interface PaginationArgs
 * @description Configuration options for the Pagination component
 */
export type PaginationArgs = {
  /**
   * Background variant of the pagination
   * @default 'white'
   */
  variant?: 'white' | 'grey';

  /**
   * Current active page number
   * @required
   */
  currentPage: number;

  /**
   * Total number of available pages
   * @required
   */
  totalPages: number;

  /**
   * Callback function triggered when page is changed
   * @param {number} page - The new page number
   */
  onPageChange?: (page: number) => void;
};
