import type { Preview } from '@storybook/react';
import React from 'react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import '@/styles/globals.css';

initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className='max-w-[400px] mx-auto bg-pink-50 h-screen relative'>
        <main className='pb-4 my-4 px-4'>
          <Story />
        </main>
      </div>
    ),
    mswDecorator,
  ],
};

export default preview;
