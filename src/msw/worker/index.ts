import { setupWorker } from 'msw';
import { setupServer } from 'msw/node';
import { toiletsHandler } from '@/msw/toiletsHandler';

const handlers = [toiletsHandler];

export const worker = setupWorker(...handlers);
export const server = setupServer(...handlers);
