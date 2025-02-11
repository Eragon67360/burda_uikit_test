import type { StorybookConfig } from '@storybook/html-webpack5';
const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
};
export default config;
