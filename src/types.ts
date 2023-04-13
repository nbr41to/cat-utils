import { signUpSchema } from '@/validations/signUpSchema';
import { z } from 'zod';

export type SignUpParams = z.infer<typeof signUpSchema>;
export type LoginParams = Omit<SignUpParams, 'passwordConfirmation'>;

export type Toilet = {
  id: number;
  time: Date;
  type: 'pee' | 'poop';
  remarks: string;
};
