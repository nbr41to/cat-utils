import { rest } from 'msw';

import { DUMMY_TOILETS } from '@/__mocks__/toilet';

export const getToiletsHandler = rest.get('/api/toilets', (req, res, ctx) => {
  return res(ctx.json(DUMMY_TOILETS));
});

export const postToiletHandler = rest.get('/api/toilets', (req, res, ctx) => {
  return res(ctx.json(DUMMY_TOILETS));
});

export const toiletHandlers = [getToiletsHandler, postToiletHandler];
