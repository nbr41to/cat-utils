import { rest } from 'msw';

export const userHandler = rest.post('/api/user', async (req, res, ctx) => {
  const { email } = await req.json();

  return res(
    ctx.json({
      email,
    }),
  );
});
