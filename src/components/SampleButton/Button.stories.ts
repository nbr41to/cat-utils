import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: {
      action: 'clicked',
    }, // なくても自動
  },
  args: {
    label: 'Button',
    size: 'medium',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
} satisfies Story;

export const Secondary: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};
