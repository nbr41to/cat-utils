import { LoginForm } from '@/components/features/login/LoginForm';
import { LoginParams } from '@/types';

export default function Login() {
  const handleSubmit = async (values: LoginParams) => {
    console.log(values);
  };

  return (
    <div>
      <h1>ログインページ</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}
