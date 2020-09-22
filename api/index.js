import Router from 'koa-router';
import { authRouter } from './routes/auth';
import { moviesRouter } from './routes/movies';

export const createRouter = () => {
  const app = new Router({ prefix: '/api' });

  authRouter(app);
  moviesRouter(app);

  return app;
};
