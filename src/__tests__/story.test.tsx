import * as Stories from '@/components/features/singup/SignUpForm.stories';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

const { Success } = composeStories(Stories);

test('Success pattern', async () => {
  const { container } = render(<Success />);

  await Stories.Success.play?.({
    canvasElement: container,
    step: () => {},
  } as any);
});
