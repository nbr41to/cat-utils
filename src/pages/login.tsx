import { LoginForm } from '@/components/features/login/LoginForm';
import { LoginParams } from '@/types';

export default function Login() {
  const handleSubmit = async (values: LoginParams) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <div>
      <h1>ログインページ</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}
