import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SignUpForm as Component, Params } from './SignupForm';

const meta = {
  title: 'SignUp/SignUpForm',
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

export const Success: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByLabelText('メールアドレス'),
      'example@example.com',
    );

    await userEvent.type(
      canvas.getByLabelText('パスワード'),
      'a-random-password',
    );

    await userEvent.type(
      canvas.getByLabelText('確認用パスワード'),
      'a-random-password',
    );

    await userEvent.click(canvas.getByRole('button'));
  },
} satisfies Story;

export const ValidationError: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByLabelText('メールアドレス'), 'string');

    await userEvent.type(canvas.getByLabelText('パスワード'), 'short');

    await userEvent.type(
      canvas.getByLabelText('確認用パスワード'),
      'missmatch',
    );

    await userEvent.tab();

    await expect(canvas.getByRole('button')).toBeDisabled();

    await expect(canvas.getByText('Invalid email')).toBeInTheDocument();
    await expect(
      canvas.getByText('Password should have at least 6 letters'),
    ).toBeInTheDocument();
    await expect(
      canvas.getByText('Password confirmation does not match'),
    ).toBeInTheDocument();
  },
} satisfies Story;
