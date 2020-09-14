import Knex from 'knex';
import knexConfig from '../knexfile';
import { Model } from 'objection';

const knex = Knex(knexConfig[process.env.NODE_ENV]);

export const knexLoader = () => {
  Model.knex(knex);
};
