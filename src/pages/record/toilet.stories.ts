import type { Meta, StoryObj } from '@storybook/react';

import { rest } from 'msw';
import Component from './toilet';
import { DUMMY_TOILETS } from '@/__mocks__/toilet';

const meta = {
  component: Component,
  parameters: {
    msw: {
      handlers: [
        rest.get('/api/toilets', (req, res, ctx) => {
          return res(ctx.json(DUMMY_TOILETS));
        }),
      ],
    },
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    list: [],
  },
} satisfies Story;
