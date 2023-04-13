import { SignUpForm } from '@/components/features/singup/SignupForm';
import { SignUpParams } from '@/types';

export default function Signup() {
  const handleSubmit = async (values: SignUpParams) => {
    console.log(values);
  };

  return (
    <div>
      <h1>登録ページ</h1>
      <SignUpForm onSubmit={handleSubmit} />
    </div>
  );
}
