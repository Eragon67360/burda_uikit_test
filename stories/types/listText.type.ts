import { ButtonLinkArgs } from './buttonLink.type';

/**
 * @interface LinkItem
 * @description Represents a link item that extends ButtonLinkArgs with a required href property
 */
type LinkItem = ButtonLinkArgs & {
  /**
   * The URL that the link points to
   * @required
   */
  href: string;
};

/**
 * @type TextItem
 * @description Union type that can either be a simple text item or a link item
 */
export type TextItem =
  | {
      /**
       * The text content to display in the list item
       * @required
       */
      text: string;
    }
  | LinkItem;

/**
 * @interface TextArgs
 * @description Configuration options for creating a text list component
 * @template T - The variant type, restricted to 'ordered', 'unordered', or 'links'
 */
export type TextArgs<T extends 'ordered' | 'unordered' | 'links' = 'ordered' | 'unordered' | 'links'> = {
  /**
   * The style variant of the list
   * @required
   */
  variant: T;
  /**
   * Optional title for the list
   */
  title?: string;
  /**
   * Array of items to display in the list
   * @required
   */
  items: T extends 'links' ? LinkItem[] : TextItem[];
};
