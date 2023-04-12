import { Button, InputBase } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { FC } from 'react';
import { z } from 'zod';

export type Params = { email: string; password: string };

type Props = {
  onSubmit: (params: Params) => Promise<void>;
};

export const LoginForm: FC<Props> = ({ onSubmit }) => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

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
        {...form.getInputProps('email')}
      />
      <InputBase
        type='password'
        label='パスワード'
        {...form.getInputProps('password')}
      />
      <div className='mt-4 w-fit mx-auto'>
        <Button type='submit'>ログイン</Button>
      </div>
    </form>
  );
};
