import type { FC } from 'react';
import { LoginParams } from '@/types';
import { Button, InputBase } from '@mantine/core';
import { useForm } from '@mantine/form';

type Props = {
  onSubmit: (params: LoginParams) => Promise<void>;
};

export const LoginForm: FC<Props> = ({ onSubmit }) => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form noValidate onSubmit={form.onSubmit((values) => onSubmit(values))}>
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
