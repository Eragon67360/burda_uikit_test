/**
 * @interface TabItem
 * @description Represents a single tab item with its content
 */
export type TabItem = {
  /**
   * Unique identifier for the tab
   * @required
   */
  id: string;

  /**
   * Display text for the tab
   * @required
   */
  label: string;

  /**
   * Optional HTML content to be displayed when tab is selected
   * @default undefined
   */
  content?: string;
};

/**
 * @interface TabsArgs
 * @description Configuration options for the Tabs component
 */
export type TabsArgs = {
  /**
   * Array of tab items to display
   * @required
   */
  items: TabItem[];

  /**
   * Visual style variant of the tabs
   * @default 'plain'
   */
  variant?: 'outline' | 'plain';

  /**
   * Color theme of the tabs
   * @default 'secondary'
   */
  color?: 'primary' | 'secondary';

  /**
   * Whether to display content panel below tabs
   * @default false
   */
  hasContent?: boolean;

  /**
   * ID of the initially selected tab
   * @default first tab's ID
   */
  selectedId?: string;

  /**
   * Background color of the tabs container
   * @default 'white'
   */
  background?: 'white' | 'gray';

  /**
   * Whether the tabs are disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback function when a tab is selected
   * @param {string} id - The ID of the selected tab
   * @default () => {}
   */
  onTabSelected?: (id: string) => void;
};
