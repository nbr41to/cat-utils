import type { Meta, StoryObj } from '@storybook/react';

import { ToiletTable as Component } from './ToiletTable';

const meta = {
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    list: [],
  },
} satisfies Story;
