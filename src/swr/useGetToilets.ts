import { fetcher } from '@/swr/featcher';
import { Toilet } from '@/types';
import useSWR from 'swr';

export const useGetToilets = () =>
  useSWR<Toilet[], Error>('/api/toilets', fetcher);
