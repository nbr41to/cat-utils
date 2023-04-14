import { SignUpForm } from '@/components/features/singup/SignupForm';
import { SignUpParams } from '@/types';
import axios from 'axios';

export default function Signup() {
  const handleSubmit = async (values: SignUpParams) => {
    const res = await axios.post('/api/user', values);
    // eslint-disable-next-line no-console
    console.log(res.data);
  };

  return (
    <div>
      <h1>登録ページ</h1>
      <SignUpForm onSubmit={handleSubmit} />
    </div>
  );
}
