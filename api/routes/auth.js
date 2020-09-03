import Router from 'koa-router';
import { AuthService } from '../../service/AuthService';

const TOKEN_KEY = 'token';

const route = new Router({ prefix: '/auth' });

export const auth = app => {
  route.post('/signup', async ctx => {
    try {
      const { user, token } = await AuthService.signUp(ctx.request.body);

      ctx.status = 201;
      ctx.body = { user, token };
      ctx.cookies.set(TOKEN_KEY, token);
    } catch (error) {
      ctx.status = 401;
      ctx.body = { message: 'Registration failed' };
    }
  });

  route.post('/signin', async ctx => {
    try {
      const { user, token } = await AuthService.signIn(ctx.request.body);

      ctx.status = 201;
      ctx.body = { user, token };
      ctx.cookies.set(TOKEN_KEY, token);
    } catch (error) {
      ctx.status = 401;
      ctx.body = { message: 'Authentication failed' };
    }
  });

  route.delete('/signout', async (ctx, next) => {
    try {
      ctx.status = 200;
      ctx.cookies.set(TOKEN_KEY, '');
    } catch (error) {
      return next(error);
    }
  });

  app.use(route.routes(), route.allowedMethods());
};
