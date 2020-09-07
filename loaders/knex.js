import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../knexfile';

const knex = Knex(knexConfig[process.env.NODE_ENV]);

export const knexLoader = () => {
  Model.knex(knex);
};
