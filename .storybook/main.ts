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
    '@storybook/addon-backgrounds'
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
};
export default config;
