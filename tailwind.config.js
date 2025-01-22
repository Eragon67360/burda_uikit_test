module.exports = {
  content: ['./stories/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        brand: 'var(--color-brand)',
        primary: {
          interaction: 'var(--color-brand)',
          light: 'var(--color-primary-light)',
          'extra-light': 'var(--color-primary-extraLight)',
          dark: 'var(--color-primary-dark)'
        },
        secondary: {
          interaction: 'var(--color-secondary-interaction)',
          light: 'var(--color-secondary-light)',
          'extra-light': 'var(--color-secondary-extraLight)',
          dark: 'var(--color-secondary-dark)'
        },
        tertiary: 'var(--color-tertiary)',
        system: {
          success: 'var(--color-system-success)',
          notification: 'var(--color-system-notification)',
          error: 'var(--color-system-error)',
        },
        base: {
          transparent: '#FFFFFF00',
          notification: 'var(--color-base-notification)',
          white: 'var(--color-base-notification)',
          black: 'var(--color-base-black)'
        },
        neutral: {
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          450: 'var(--color-neutral-450)',
          500: 'var(--color-neutral-500)',
        },
        'storybook-label': 'var(--color-storybook-label)',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        nested: '0.25rem'
      },
      fontFamily: {
        'instrument-sans': ['"Instrument Sans"', 'sans-serif'],
        'roboto-serif': ['"Roboto Serif"', 'serif'],
      },
      fontSize: {
        /** DESKTOP */
        /** Headlines */
        'h1-desktop': ['3.25rem', { lineHeight: '4.125rem', letterSpacing: '-0.04875rem', fontWeight: 600 }],
        'h2-desktop': ['2.75rem', { lineHeight: '3.125rem', letterSpacing: '-0.0275rem', fontWeight: 600 }],
        'h3-desktop': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.0225rem', fontWeight: 600 }],
        'h4-desktop': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.01875rem', fontWeight: 600 }],
        'h5-desktop': ['1.5rem', { lineHeight: '1.75rem', letterSpacing: '-0.015rem', fontWeight: 600 }],
        'h6-desktop': ['1.25rem', { lineHeight: '1.5rem', fontWeight: 600 }],
        /** Subhead */
        'subhead1-desktop': ['1.875rem', { lineHeight: '2.5rem', fontWeight: 600 }],
        'subhead2-desktop': ['1.5rem', { lineHeight: '2rem', fontWeight: 600 }],
        'subhead3-desktop': ['1.125rem', { lineHeight: '1.375rem', fontWeight: 600 }],
        'subhead4-desktop': ['1rem', { lineHeight: '1.25rem', fontWeight: 600 }],
        /** Subscription */
        'subscription-default-desktop': ['2.25rem', { lineHeight: '3rem', letterSpacing: '-0.045rem', fontWeight: 600 }],
        'subscription-small-desktop': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.01875rem', fontWeight: 600 }],
        /** Order step */
        'order-step-desktop': ['1.875rem', { lineHeight: '2.75rem', letterSpacing: '-0.0375rem', fontWeight: 700 }],
        /** Hotline footer */
        'hotline-footer-default-desktop': ['3.75rem', { lineHeight: '4rem', fontWeight: 400 }],
        'hotline-footer-small-desktop': ['1rem', { lineHeight: '1rem', fontWeight: 600 }],
        /** Copy */
        'teaser-desktop': ['1.125rem', { lineHeight: '1.5rem', letterSpacing: '-0.0225rem', fontWeight: 500 }],
        'copy-desktop': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.00875rem', fontWeight: 400 }],
        'copy-small-desktop': ['0.75rem', { lineHeight: '1.125rem', fontWeight: 500 }],
        'bulletpoint-copy-desktop': ['1rem', { lineHeight: '1.25rem', letterSpacing: '0.01rem', fontWeight: 600 }],
        'footer-copy-desktop': ['0.75rem', { lineHeight: '1.125rem', letterSpacing: '0.0075rem', fontWeight: 400 }],
        /** Label */
        'label-desktop': ['0.75rem', { lineHeight: '1.125rem', letterSpacing: '-0.0075rem', fontWeight: 400 }],
        'button-label-desktop': ['0.875rem', { lineHeight: '1.25rem', fontWeight: 700 }],
        'button-label-large-desktop': ['1.125rem', { lineHeight: '1.625rem', letterSpacing: '0.01125rem', fontWeight: 700 }],
        'input-desktop': ['0.875rem', { lineHeight: '1.25rem', fontWeight: 500 }],
        'placeholder-desktop': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.00875rem', fontWeight: 400 }],
        'link-desktop': ['0.875rem', { lineHeight: '2rem', fontWeight: 700 }],
        'link-small-desktop': ['0.75rem', { lineHeight: '1.5rem', fontWeight: 700 }],

        /** MOBILE */
        /** Headlines */
        'h1-mobile': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.0225rem', fontWeight: 600 }],
        'h2-mobile': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.01875rem', fontWeight: 600 }],
        'h3-mobile': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.015rem', fontWeight: 600 }],
        'h4-mobile': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.0125rem', fontWeight: 600 }],
        'h5-mobile': ['1.125rem', { lineHeight: '1.5rem', fontWeight: 600 }],
        'h6-mobile': ['1rem', { lineHeight: '1.5rem', fontWeight: 600 }],
        /** Subhead */
        'subhead1-mobile': ['1.25rem', { lineHeight: '1.75rem', fontWeight: 500 }],
        'subhead2-mobile': ['1.125rem', { lineHeight: '1.625rem', fontWeight: 500 }],
        'subhead3-mobile': ['1rem', { lineHeight: '1.375rem', fontWeight: 500 }],
        'subhead4-mobile': ['0.875rem', { lineHeight: '1.25rem', fontWeight: 500 }],
        /** Subscription */
        'subscription-default-mobile': ['2rem', { fontWeight: 600 }],
        'subscription-small-mobile': ['1.5rem', { fontWeight: 600 }],
        /** Order step */
        'order-step-mobile': ['1.5rem', { lineHeight: '2.5rem', letterSpacing: '-0.03rem', fontWeight: 700 }],
        /** Hotline footer */
        'hotline-footer-default-mobile': ['2.5rem', { lineHeight: '3rem', fontWeight: 400 }],
        'hotline-footer-small-mobile': ['1rem', { lineHeight: '1rem', fontWeight: 600 }],
        /** Copy */
        'teaser-mobile': ['1rem', { lineHeight: '1.25rem', fontWeight: 500 }],
        'copy-mobile': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.00875rem', fontWeight: 400 }],
        'copy-small-mobile': ['0.75rem', { lineHeight: '1rem', fontWeight: 400 }],
        'bulletpoint-copy-mobile': ['0.875rem', { lineHeight: '1.25rem', fontWeight: 600 }],
        'footer-copy-mobile': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.00875rem', fontWeight: 400 }],
        /** Label */
        'label-mobile': ['0.75rem', { lineHeight: '0.875rem', letterSpacing: '-0.0075rem', fontWeight: 400 }],
        'button-label-mobile': ['0.875rem', { lineHeight: '1rem', fontWeight: 700 }],
        'button-label-large-mobile': ['1rem', { lineHeight: '1.25rem', letterSpacing: '0.02rem', fontWeight: 700 }],
        'input-mobile': ['0.875rem', { lineHeight: '1.25rem', fontWeight: 500 }],
        'placeholder-mobile': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.00875rem', fontWeight: 400 }],
        'link-mobile': ['0.875rem', { lineHeight: '1.75rem', fontWeight: 700 }],
        'link-small-mobile': ['0.75rem', { lineHeight: '1rem', fontWeight: 700 }],


        /** Storybook */
        'label': ['0.9375', { lineHeight: '1.4375rem', letterSpacing: '-0.01875rem', fontWeight: 500 }],
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
      },
    }
  },
  plugins: [],
};
