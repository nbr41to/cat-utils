import { setupWorker } from 'msw';
import { setupServer } from 'msw/node';
import { toiletHandlers } from '@/__mocks__/msw/toiletHandlers';
import { userHandlers } from '@/__mocks__/msw/userHandlers';

const handlers = [...toiletHandlers, ...userHandlers];

export const worker = setupWorker(...handlers);
export const server = setupServer(...handlers);
