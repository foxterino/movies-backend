import KoaLogger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import { createRouter } from '../api';

export const koaLoader = ({ app }) => {
  app.use(json());
  app.use(KoaLogger());
  app.use(bodyParser());

  const router = createRouter();
  app.use(router.routes(), router.allowedMethods());
};
