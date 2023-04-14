import { DUMMY_CATS } from '@/__mocks__/cat';
import { User } from '@/types';

export const DUMMY_USER: User = {
  id: 1,
  name: 'のぶ',
  email: 'example@example.com',
  cats: DUMMY_CATS,
  catFoods: [],
};
