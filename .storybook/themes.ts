export const brandThemes = {
  FOCUS: {
    // FOCUS Theme
    brand: 'hsla(358, 80%, 51%, 1)',
    brandForeground: 'hsla(0, 0%, 0%, 1)',

    // Primary interaction colors
    primaryColor: 'hsla(358, 80%, 51%, 1)',
    primaryColorForeground: 'hsla(0, 0%, 0%, 1)',

    primaryLight: 'hsla(358, 80%, 61%, 1)',
    primaryLightForeground: 'hsla(0, 0%, 0%, 1)',

    primaryExtraLight: 'hsla(358, 80%, 71%, 1)',
    primaryExtraLightForeground: 'hsla(0, 0%, 0%, 1)',

    primaryDark: 'hsla(358, 80%, 31%, 1);',
    primaryDarkForeground: 'hsla(0, 0%, 100%, 1)',

    // Secondary interaction colors
    secondaryColor: 'hsla(169, 38%, 67%, 1)',
    secondaryColorForeground: 'hsla(0, 0%, 0%, 1)',

    secondaryLight: 'hsla(169, 38%, 77%, 1)',
    secondaryLightForeground: 'hsla(0, 0%, 0%, 1)',

    secondaryExtraLight: 'hsla(168, 39%, 87%, 1)',
    secondaryExtraLightForeground: 'hsla(0, 0%, 0%, 1)',

    // Tertiary interaction colors
    tertiary: 'hsla(44, 36%, 78%, 1)',
    tertiaryForeground: 'hsla(0, 0%, 0%, 1)',

    // Other colors
    systemSuccess: 'hsla(118, 53%, 57%, 1)',
    systemNotification: 'hsla(46, 79%, 67%, 1)',
    systemError: 'hsla(0, 100%, 44%, 1)',

    brandBackground: 'hsla(49, 75%, 89%, 1)',
    brandBackgroundForeground: 'hsla(0, 0%, 0%, 1)',

    fontFamily: "'Instrument Sans', sans-serif",

    baseNotification: 'hsla(0, 0%, 100%, 1)',

    radius: '0.5rem',
    radiusNested: '0.25rem',
  },
  MSG: {
    // Mein Schöner Garten Theme
    brand: '#76B82A',
    brandForeground: 'hsla(0, 0%, 0%, 1)',

    // Primary interaction colors
    primaryColor: '#76B82A',
    primaryColorForeground: 'hsla(0, 0%, 0%, 1)',

    primaryLight: '#AFD287',
    primaryLightForeground: 'hsla(0, 0%, 0%, 1)',

    primaryExtraLight: '#E8EFDF',
    primaryExtraLightForeground: 'hsla(0, 0%, 0%, 1)',

    primaryDark: 'hsla(358, 80%, 31%, 1);',
    primaryDarkForeground: 'hsla(0, 0%, 100%, 1)',

    // Secondary interaction colors
    secondaryColor: '#007C34',
    secondaryColorForeground: 'hsla(0, 0%, 0%, 1)',

    secondaryLight: '#0CA14B',
    secondaryLightForeground: 'hsla(0, 0%, 0%, 1)',

    secondaryExtraLight: 'hsla(168, 39%, 87%, 1)',
    secondaryExtraLightForeground: 'hsla(0, 0%, 0%, 1)',

    // Tertiary interaction colors
    tertiary: 'hsla(44, 36%, 78%, 1)',
    tertiaryForeground: 'hsla(0, 0%, 0%, 1)',

    // Other colors
    systemSuccess: 'hsla(118, 53%, 57%, 1)',
    systemNotification: 'hsla(46, 79%, 67%, 1)',
    systemError: 'hsla(0, 100%, 44%, 1)',

    brandBackground: 'hsla(49, 75%, 89%, 1)',
    brandBackgroundForeground: 'hsla(0, 0%, 0%, 1)',

    fontFamily: "'Instrument Sans', sans-serif",

    baseNotification: 'hsla(0, 0%, 100%, 1)',

    radius: '0.5rem',
    radiusNested: '0.25rem',
  },
};

export const applyBrandTheme = (brandKey: keyof typeof brandThemes) => {
  const theme = brandThemes[brandKey];

  const themeVariables = {
    // Primary interaction colors
    '--color-primary-interaction': theme.primaryColor,
    '--color-primary-interaction-foreground': theme.primaryColorForeground,
    '--color-primary-light': theme.primaryLight,
    '--color-primary-light-foreground': theme.primaryLightForeground,
    '--color-primary-extraLight': theme.primaryExtraLight,
    '--color-primary-extraLight-foreground': theme.primaryExtraLightForeground,
    '--color-primary-dark': theme.primaryDark,
    '--color-primary-dark-foreground': theme.primaryDarkForeground,

    // Secondary interaction colors
    '--color-secondary-interaction': theme.secondaryColor,
    '--color-secondary-interaction-foreground': theme.secondaryColorForeground,
    '--color-secondary-light': theme.secondaryLight,
    '--color-secondary-light-foreground': theme.secondaryLightForeground,
    '--color-secondary-extraLight': theme.secondaryExtraLight,
    '--color-secondary-extraLight-foreground': theme.secondaryExtraLightForeground,

    // Brand colors
    '--color-brand': theme.brand,
    '--color-brand-foreground': theme.brandForeground,
    '--color-brand-custom-background': theme.brandBackground,
    '--color-brand-custom-background-foreground': theme.brandBackgroundForeground,

    // Other colors
    '--color-tertiary': theme.tertiary,
    '--color-tertiary-foreground': theme.tertiaryForeground,
    '--color-system-success': theme.systemSuccess,
    '--color-system-notification': theme.systemNotification,
    '--color-system-error': theme.systemError,
    '--color-base-notification': theme.baseNotification,

    // Font and other properties
    '--font-sans': theme.fontFamily,
    '--radius': theme.radius,
    '--radius-nested': theme.radiusNested,
  };

  Object.entries(themeVariables).forEach(([variable, value]) => {
    document.documentElement.style.setProperty(variable, value);
  });
};
