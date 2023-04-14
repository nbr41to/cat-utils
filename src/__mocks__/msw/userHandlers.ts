import { DUMMY_USER } from '@/__mocks__/user';
import { rest } from 'msw';

export const getUserHandler = rest.get('/api/user', async (req, res, ctx) => {
  return res(ctx.json(DUMMY_USER));
});

export const postUserHandler = rest.post('/api/user', async (req, res, ctx) => {
  const { email } = await req.json();

  return res(ctx.json({ ...DUMMY_USER, email }));
});

export const userHandlers = [getUserHandler, postUserHandler];
