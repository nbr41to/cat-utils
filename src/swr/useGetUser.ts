import { fetcher } from '@/swr/featcher';
import { User } from '@/types';
import useSWR from 'swr';

export const useGetUser = () => useSWR<User, Error>('/api/user', fetcher);
