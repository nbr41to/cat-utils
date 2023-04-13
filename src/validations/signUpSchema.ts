import { z } from 'zod';

export const signUpSchema = z
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
