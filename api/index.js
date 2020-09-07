import Router from 'koa-router';
import { auth } from './routes/auth';

export const createRouter = () => {
  const app = new Router({ prefix: '/api' });

  auth(app);

  return app;
};
