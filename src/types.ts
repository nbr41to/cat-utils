import { LIFE_STAGE_OPTIONS } from '@/constants';
import { signUpSchema } from '@/validations/signUpSchema';
import { z } from 'zod';

export type SignUpParams = z.infer<typeof signUpSchema>;
export type LoginParams = Omit<SignUpParams, 'passwordConfirmation'>;

export type User = {
  id: number;
  name: string;
  email: string;
  cats: Cat[];
  catFoods: CatFood[];
};

export type Cat = {
  id: number;
  name: string;
  gender: 'male' | 'female';
  weight: number;
  birthDate: Date;
  lifeStage: LifeStageOptionKey;
};
export type LifeStageOptionKey = (typeof LIFE_STAGE_OPTIONS)[number]['value'];

export type CatFood = {
  id: number;
  name: string;
  calory: number;
};

/* Record */
export type Toilet = {
  id: number;
  time: Date;
  number: ToiletNumber;
  remarks: string;
};
export type ToiletNumber = 'one' | 'two'; // おしっこ or うんち

export type ReminderPeriod = 'day' | 'week' | 'month' | 'year';
export type Reminder = {
  id: number;
  name: string;
  repeat: boolean;
  period: ReminderPeriod;
  createdAt: Date;
};
