// .storybook/preview.ts
import type { Preview } from '@storybook/html';
import './tailwind.css';
import './variables.css';

const preview: Preview = {
  parameters: {
    // Maintain your existing backgrounds configuration
    backgrounds: {
      values: [
        { name: 'Dark', value: '#333333' },
        { name: 'Light', value: '#F3F4F6' },
      ],
      default: 'Light',
    },

    // Maintain your existing controls configuration
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      // Add sorting for better organization
      sort: 'requiredFirst',
      // Enable expanded mode by default
      expanded: true,
    },

    // Maintain centered layout
    layout: 'centered',

    // Add viewport configurations
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
            width: '1024px',
            height: '768px',
          },
        },
      },
      defaultViewport: 'desktop',
    },

    // Documentation settings
    docs: {
      // Show code by default
      source: {
        state: 'open',
      },
      // Configure story sorting
      story: {
        height: '300px', // Default height for story preview
      },
    },

    // Actions configuration
    actions: {
      argTypesRegex: '^on[A-Z].*'
    },

    // Optional: Add default padding to all stories
    paddings: {
      values: [
        { name: 'None', value: '0' },
        { name: 'Small', value: '16px' },
        { name: 'Medium', value: '32px' },
        { name: 'Large', value: '64px' },
      ],
      default: 'Medium',
    },
  },

  // Optional: Global decorator for all stories
  decorators: [
    (Story) => {
      // You can add global wrapper or logic here
      return Story();
    },
  ],
};

export default preview;
