import Router from 'koa-router';
import { AuthService } from '../../service/AuthService';

export const TOKEN_KEY = 'token';

const route = new Router({ prefix: '/auth' });

export const auth = app => {
  route.post('/signup', async ctx => {
    try {
      const { user, token } = await AuthService.signUp(ctx.request.body);

      ctx.status = 201;
      ctx.body = { user, token };
      ctx.cookies.set(TOKEN_KEY, token);
    } catch (error) {
      ctx.throw(401, 'Registration failed');
    }
  });

  route.post('/signin', async ctx => {
    try {
      const { user, token } = await AuthService.signIn(ctx.request.body);

      ctx.status = 201;
      ctx.body = { user, token };
      ctx.cookies.set(TOKEN_KEY, token);
    } catch (error) {
      ctx.throw(401, 'Incorrect credentials');
    }
  });

  route.delete('/signout', async ctx => {
    ctx.status = 200;
    ctx.cookies.set(TOKEN_KEY, '');
  });

  app.use(route.routes(), route.allowedMethods());
};
