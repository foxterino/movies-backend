import Router from 'koa-router';
import { authRouter } from './routes/auth';
import { moviesRouter } from './routes/movies';
import { commentsRouter } from './routes/comments';

export const createRouter = () => {
  const app = new Router({ prefix: '/api' });

  authRouter(app);
  moviesRouter(app);
  commentsRouter(app);

  return app;
};
