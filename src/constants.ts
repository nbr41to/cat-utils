import { LifeStageOptionKey } from '@/types';

/* Select options */
export const LIFE_STAGE_OPTIONS = [
  { label: '子猫（4ヶ月未満）', value: 'kitten-3' },
  { label: '子猫（4～6ヶ月）', value: 'kitten-4-6' },
  { label: '子猫（7～12ヶ月）', value: 'kitten-7-12' },
  { label: '標準体型の成猫（未避妊・未去勢）', value: 'adult' },
  { label: '標準体型の成猫（避妊・去勢済）', value: 'fixed-adult' },
  { label: '活動的な猫', value: 'active' },
  { label: '肥満気味の猫', value: 'obese' },
  { label: '病気の猫', value: 'ill' },
  { label: 'ダイエット中の猫', value: 'diet' },
  { label: '増量中の猫', value: 'gain' },
  { label: '高齢猫', value: 'senior' },
  { label: '妊娠中', value: 'pregnant' },
] as const;

export const LIFE_STAGE_KEYS = {
  'KITTEN-3': 'kitten-3',
  'KITTEN-4-6': 'kitten-4-6',
  'KITTEN-7-12': 'kitten-7-12',
  ADULT: 'adult',
  'FIXED-ADULT': 'fixed-adult',
  ACTIVE: 'active',
  OBESE: 'obese',
  ILL: 'ill',
  DIET: 'diet',
  GAIN: 'gain',
  SENIOR: 'senior',
  PREGNANT: 'pregnant',
} as const;

export const LIFE_STAGE_LABELS = {
  'kitten-3': '子猫（4ヶ月未満）',
  'kitten-4-6': '子猫（4～6ヶ月）',
  'kitten-7-12': '子猫（7～12ヶ月）',
  adult: '標準体型の成猫（未避妊・未去勢）',
  'fixed-adult': '標準体型の成猫（避妊・去勢済）',
  active: '活動的な猫',
  obese: '肥満気味の猫',
  ill: '病気の猫',
  diet: 'ダイエット中の猫',
  gain: '増量中の猫',
  senior: '高齢猫',
  pregnant: '妊娠中',
} as const;

export const LIFE_STAGE_VALUES: Record<LifeStageOptionKey, number> = {
  'kitten-3': 3.0,
  'kitten-4-6': 2.5,
  'kitten-7-12': 2.0,
  adult: 1.4,
  'fixed-adult': 1.2,
  active: 1.6,
  obese: 1.0,
  ill: 1.0,
  diet: 0.8,
  gain: 1.3,
  senior: 1.1,
  pregnant: 2.0,
} as const;

export const TOILET_LABELS = {
  one: 'おしっこ',
  two: 'うんち',
} as const;
