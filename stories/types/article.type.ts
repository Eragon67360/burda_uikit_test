/**
 * @interface ArticleArgs
 * @description Configuration options for creating an Article component
 */
export type ArticleArgs = {
  /**
   * Background color of the article
   * @default 'white'
   */
  backgroundColor?: 'white' | 'gray';

  /**
   * Title text displayed below the image
   * @required
   */
  title: string;

  /**
   * URL of the article image
   * @required
   */
  image: string;

  /**
   * Alternative text for the image
   * @default Uses title if not provided
   */
  imageAltText?: string;

  /**
   * Label text for the CTA button
   * @required
   */
  buttonLabel: string;

  /**
   * Optional badge text displayed in top-left corner
   */
  badgeText?: string;

  /**
   * Click handler for the article
   * @default () => {}
   */
  onClick?: () => void;
};

/**
 * @interface AccessibleArticleArgs
 * @description Extended configuration options with accessibility properties
 */
export type AccessibleArticleArgs = ArticleArgs & {
  /**
   * Custom ARIA label for the article
   * @default Uses title if not provided
   */
  ariaLabel?: string;

  /**
   * ARIA role for the article element
   * @default 'article'
   */
  role?: 'article' | 'region';

  /**
   * Whether the article should be keyboard focusable
   * @default true
   */
  focusable?: boolean;
};
