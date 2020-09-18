import Knex from 'knex';
import knexConfig from './knexfile';
import { Model } from 'objection';

const boot = () => {
  const knex = Knex(knexConfig[process.env.NODE_ENV]);
  Model.knex(knex);
};

boot();
