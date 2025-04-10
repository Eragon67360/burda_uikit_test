import type { StorybookConfig } from '@storybook/html-webpack5';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: ['@storybook/addon-webpack5-compiler-swc', {
    name: '@storybook/addon-essentials',
    options: {
      backgrounds: false,
    },
  }, '@storybook/addon-interactions', '@storybook/addon-styling-webpack', '@storybook/addon-backgrounds', '@storybook/addon-a11y', '@storybook/addon-mdx-gfm', '@chromatic-com/storybook'],

  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },

  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, "@/components/stories/"),
      };
    }
    return config;
  },

  staticDirs: ['../public'],

  docs: {
    autodocs: true
  },

  typescript: {
    check: false,
    checkOptions: {},
    skipCompiler: false,
  },
};
export default config;
