// .storybook/preview.ts
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/html';
// import './brand.css';
import './tailwind.css';

const extendedVP = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '810px',
    },
  },
  widescreen: {
    name: 'Widescreen',
    styles: {
      width: '1600px',
      height: '900px',
    },
  },
};

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      values: [
        { name: 'Gray', value: '#F3F4F6' },
        { name: 'White', value: '#FFFFFF' },
      ],
      default: 'Gray',
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: 'requiredFirst',
      expanded: true,
    },

    layout: 'centered',

    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...extendedVP,
      },
    },

    docs: {
      toc: {
        headingSelector: 'h2, h3',
        title: 'On this page',
        disable: false,
      },
      canvas: {
        layout: 'fullscreen',
      },
      story: {
        height: '250px',
        inline: true,
        iframeHeight: '500px',
      },
      parameters: {
        layout: 'padded',
        padding: '1rem',
      },
      source: {
        state: 'open',
      },
    },

    // actions: {
    //   argTypesRegex: '^on[A-Z].*'
    // },

    paddings: {
      values: [
        { name: 'None', value: '0' },
        { name: 'Small', value: '16px' },
        { name: 'Medium', value: '32px' },
        { name: 'Large', value: '64px' },
      ],
      default: 'Medium',
    },

    options: {
      storySort: {
        order: [
          'Welcome',
          'Getting Started',
          'Willkommen',
          'Erste Schritte',
          'Design System',
          'Components (Atoms)',
          'Components (Molecules)',
          'Components (Organisms)',
          'Templates',
        ],
      },
    },
  },
  beforeEach: () => {
    localStorage.setItem('primaryColorMode', 'light');
  },
  globalTypes: {
    theme: {
      name: 'Brand',
      description: 'Global brand theme',
      defaultValue: 'FOCUS',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'FOCUS', title: 'FOCUS Brand' },
          { value: 'MSG', title: 'Mein Schöner Garten Brand' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const themeName = context.globals.theme || 'FOCUS';

      // Dynamically import brand-specific CSS
      import(`./brand-${themeName.toLowerCase()}.css`);

      // applyBrandTheme(themeName as keyof typeof brandThemes);

      return Story();
    },
  ],
};

export default preview;
