import { rest } from 'msw';

import { DUMMY_TOILETS } from '@/__mocks__/toilet';

export const toiletsHandler = rest.get('/api/toilets', (req, res, ctx) => {
  return res(ctx.json(DUMMY_TOILETS));
});
