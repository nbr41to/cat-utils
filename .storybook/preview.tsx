import type { Preview } from '@storybook/react';

import React from 'react';
import '../src/styles/globals.css';

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
  ],
};

export default preview;
