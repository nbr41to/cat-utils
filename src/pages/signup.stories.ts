import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Component from './signup';
import { SignUpParams } from '@/types';
import { userHandlers } from '@/__mocks__/msw/userHandlers';

const meta = {
  component: Component,
  argTypes: {},
  args: {
    // eslint-disable-next-line no-console
    onSubmit: async (params: SignUpParams) => console.log(params),
  },
  parameters: {
    nextjs: {
      router: {
        basePath: '/signup',
        pathname: '/signup',
        asPath: '/signup',
      },
    },
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

export const Success: Story = {
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
      await userEvent.type(
        canvas.getByLabelText('確認用パスワード'),
        'a-random-password',
      );
    });

    await step('Submit form', async () => {
      await userEvent.click(
        canvas.getByRole('button', {
          name: '登録',
        }),
      );
    });
  },
} satisfies Story;

export const ValidationError: Story = {
  args: {},
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Enter email and password', async () => {
      await userEvent.type(canvas.getByLabelText('メールアドレス'), 'string');
      await userEvent.type(canvas.getByLabelText('パスワード'), 'short');
      await userEvent.type(
        canvas.getByLabelText('確認用パスワード'),
        'missmatch',
      );
      await userEvent.tab();
    });

    await step('View validation error messages', async () => {
      await expect(canvas.getByText('Invalid email')).toBeInTheDocument();
      await expect(
        canvas.getByText('Password should have at least 6 letters'),
      ).toBeInTheDocument();
      await expect(
        canvas.getByText('Password confirmation does not match'),
      ).toBeInTheDocument();
    });

    await step('Disabled submit', async () => {
      await expect(
        canvas.getByRole('button', {
          name: '登録',
        }),
      ).toBeDisabled();
    });
  },
} satisfies Story;
