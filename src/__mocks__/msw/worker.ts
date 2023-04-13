import { setupWorker } from 'msw';
import { setupServer } from 'msw/node';
import { toiletsHandler } from '@/__mocks__/msw/toiletsHandler';
import { userHandler } from '@/__mocks__/msw/userHandler';

const handlers = [toiletsHandler, userHandler];

export const worker = setupWorker(...handlers);
export const server = setupServer(...handlers);
