import { signUpSchema } from '@/validations/signUpSchema';
import { z } from 'zod';

export type SignUpParams = z.infer<typeof signUpSchema>;
