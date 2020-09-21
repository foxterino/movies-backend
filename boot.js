import Knex from 'knex';
import config from './config';

const knex = Knex(config(process.env.NODE_ENV));

const shutdown = () => knex.destroy();

export const app = {
  knex,
  shutdown,
};
