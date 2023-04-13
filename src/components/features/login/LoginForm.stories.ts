import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm as Component } from './LoginForm';
import { userEvent, within } from '@storybook/testing-library';
import { LoginParams } from '@/types';

const meta = {
  title: 'Login/LoginForm',
  component: Component,
  argTypes: {},
  args: {
    onSubmit: async (params: LoginParams) => console.log(params),
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
} satisfies Story;

export const Submit: Story = {
  args: {},
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Enter email and password', async () => {
      await userEvent.type(
        canvas.getByLabelText('メールアドレス'),
        'example@example.com',
      );
      await userEvent.type(
        canvas.getByLabelText('パスワード'),
        'a-random-password',
      );
    });

    await step('Submit form', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
  },
} satisfies Story;
