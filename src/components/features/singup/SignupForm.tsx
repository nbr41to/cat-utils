import { Button, InputBase } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { FC } from 'react';
import { z } from 'zod';

const schema = z
  .object({
    email: z.string().email({ message: 'Invalid email' }),
    password: z
      .string()
      .min(6, { message: 'Password should have at least 6 letters' }),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Password confirmation does not match',
    path: ['passwordConfirmation'],
  });

export type Params = { email: string; password: string };

type Props = {
  onSubmit: (params: Params) => Promise<void>;
};

export const SignUpForm: FC<Props> = ({ onSubmit }) => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validate: zodResolver(schema),
    validateInputOnBlur: true,
  });

  console.log(form.errors);

  return (
    <form
      noValidate
      onSubmit={form.onSubmit(
        (values) => onSubmit(values),
        (errors) => console.error(errors),
      )}
    >
      <InputBase
        type='email'
        label='メールアドレス'
        error={form.errors.email}
        {...form.getInputProps('email')}
      />
      <InputBase
        type='password'
        label='パスワード'
        error={form.errors.password}
        {...form.getInputProps('password')}
      />
      <InputBase
        type='password'
        label='確認用パスワード'
        error={form.errors.passwordConfirmation}
        {...form.getInputProps('passwordConfirmation')}
      />
      <div className='mt-4 w-fit mx-auto'>
        <Button type='submit' disabled={!form.isValid()}>
          登録
        </Button>
      </div>
    </form>
  );
};
