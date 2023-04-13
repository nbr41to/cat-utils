import { SignUpForm } from '@/components/features/singup/SignupForm';
import { SignUpParams } from '@/types';
import { Button } from '@mantine/core';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Signup() {
  const router = useRouter();
  const handleSubmit = async (values: SignUpParams) => {
    const res = await axios.post('/api/user', values);
    console.log(res.data);
  };
  console.log(router.basePath);
  console.log(router.asPath);
  console.log(router.pathname);

  return (
    <div>
      <h1>登録ページ</h1>
      <SignUpForm onSubmit={handleSubmit} />

      <Button onClick={() => router.push('/login')}>ログインページへ</Button>
    </div>
  );
}
