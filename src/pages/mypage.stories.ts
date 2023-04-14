import type { Meta, StoryObj } from '@storybook/react';
import Component from './mypage';
import { userHandlers } from '@/__mocks__/msw/userHandlers';

const meta = {
  component: Component,
  parameters: {
    msw: {
      handlers: userHandlers,
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
} satisfies Story;
