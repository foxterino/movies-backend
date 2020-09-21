import Knex from 'knex';
import config from '../config';
import { Model } from 'objection';

const knex = Knex(config(process.env.NODE_ENV));

export const knexLoader = () => {
  Model.knex(knex);
};
