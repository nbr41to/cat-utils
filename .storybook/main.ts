import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-coverage',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  /* Alias */
  webpackFinal: async (baseConfig) => {
    if (!baseConfig.resolve) return baseConfig;
    baseConfig.resolve.modules = [
      ...(baseConfig.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ];
    baseConfig.resolve.alias = {
      ...baseConfig.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };

    return baseConfig;
  },
};
export default config;
