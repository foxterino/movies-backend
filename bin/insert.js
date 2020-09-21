import path from 'path';
import minimist from 'minimist';
import { app } from '../boot';
import { Model as ObjectionModel } from 'objection';

// eslint-disable-next-line global-require, import/no-dynamic-require
const req = pathToFile => require(path.join(__dirname, pathToFile));

const insert = async () => {
  ObjectionModel.knex(app.knex);

  try {
    const { modelName, dataName } = minimist(process.argv.slice(2));

    const Model = req(`../models/${modelName}.js`)[modelName];
    const data = req(`../data/${dataName}.json`);

    await Model.query().insert(data);
  } catch (error) {
    console.log(error);
  }

  app.shutdown();
};

insert();
