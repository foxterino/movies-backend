import json from 'koa-json';
import cors from '@koa/cors';
import KoaLogger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import { createRouter } from '../api';
import { errorHandler } from '../middlewares/errorHandler';

export const koaLoader = ({ app }) => {
  app.use(errorHandler());

  app.use(cors({ credentials: true }));
  app.use(json());
  app.use(KoaLogger());
  app.use(bodyParser());

  const router = createRouter();
  app.use(router.routes(), router.allowedMethods());
};
