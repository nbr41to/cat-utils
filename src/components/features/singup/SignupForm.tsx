import type { FC } from 'react';
import { SignUpParams } from '@/types';
import { signUpSchema } from '@/validations/signUpSchema';
import { Button, InputBase } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';

type Props = {
  onSubmit: (params: SignUpParams) => Promise<void>;
};

export const SignUpForm: FC<Props> = ({ onSubmit }) => {
  const form = useForm<SignUpParams>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validate: zodResolver(signUpSchema),
    validateInputOnBlur: true,
  });

  return (
    <form noValidate onSubmit={form.onSubmit((values) => onSubmit(values))}>
      <InputBase
        type='name'
        label='ユーザー名'
        error={form.errors.name}
        {...form.getInputProps('name')}
      />
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
