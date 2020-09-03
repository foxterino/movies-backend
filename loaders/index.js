import { koaLoader } from './koa';
import { knexLoader } from './knex';

export const loadApp = ({ app }) => {
  koaLoader({ app });
  knexLoader();
};
