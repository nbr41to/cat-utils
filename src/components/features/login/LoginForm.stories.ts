import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm as Component, Params } from './LoginForm';

const meta = {
  title: 'Login/LoginForm',
  component: Component,
  argTypes: {},
  args: {
    onSubmit: async (params: Params) => console.log(params),
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
} satisfies Story;
