/**
 * @interface LanguageOption
 * @description Represents a single language option in the dropdown
 */
export type LanguageOption = {
  /**
   * Language code (e.g., 'en', 'de', 'fr')
   * @category Props
   */
  code: string;

  /**
   * Display name of the language
   * @category Props
   */
  name: string;

  /**
   * Icon identifier from IconRegistry for the language flag
   * @category Props
   */
  icon: string;
};

/**
 * @interface LanguageDropdownArgs
 * @description Configuration options for the language dropdown component
 */
export type LanguageDropdownArgs = {
  /**
   * Array of available language options
   * @required
   * @category Props
   */
  options: LanguageOption[];

  /**
   * Currently selected language code
   * @default First option in the options array
   * @category Props
   */
  selectedLanguage?: string;

  /**
   * Label text for the dropdown button
   * @default 'Sprache'
   * @category Props
   */
  label?: string;

  /**
   * Whether the dropdown is disabled
   * @default false
   * @category Props
   */
  disabled?: boolean;

  /**
   * Whether to show the compressed version (icon only)
   * @default false
   * @category Props
   */
  isCompressed: boolean;
};
