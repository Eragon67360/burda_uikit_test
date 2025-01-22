import './tailwind.css';
import './variables.css';

const preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'Dark', value: '#333333' },
        { name: 'Light', value: '#F3F4F6' },
      ],
      default: 'Light',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
};

export default preview;
