// .storybook/preview.ts
import type { Preview } from '@storybook/html';

import './tailwind.css';
import './variables.css';

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
        mobile: {
          name: 'Mobile',
          styles: {
            width: '320px',
            height: '568px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
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
            width: '1920px',
            height: '1080px',
          },
        },
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

    actions: {
      argTypesRegex: '^on[A-Z].*'
    },

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
        order: ['Welcome', 'Getting Started', 'Willkommen', 'Erste Schritte'],
      },
    },
  },

  decorators: [
    (Story) => {
      return Story();
    },
  ],
};

export default preview;
