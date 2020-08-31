import Koa from 'koa';
import Router from 'koa-router';
import Logger from 'koa-logger';

import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from './knexfile';

const environment = process.env.NODE_ENV || 'development';
const knex = Knex(knexConfig[environment]);

Model.knex(knex);

const PORT = 3000;

const app = new Koa();
const router = new Router();

// Response to the World to the GET requests
router.get('/', async ctx => {
  ctx.body = 'Hello, World!\n';
});

// Development logging
app.use(Logger());
// Add routes and response to the OPTIONS requests
app.use(router.routes()).use(router.allowedMethods());

// Listen the port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
