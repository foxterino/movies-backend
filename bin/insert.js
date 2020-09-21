import path from 'path';
import minimist from 'minimist';
import requireAll from 'require-all';
import { app } from '../boot';
import { Model as ObjectionModel } from 'objection';

const insert = async () => {
  ObjectionModel.knex(app.knex);

  try {
    const { modelName, dataName } = minimist(process.argv.slice(2));

    const Models = requireAll({ dirname: path.join(__dirname, '../models') });
    const Model = Models[modelName][modelName];
    const dataSets = requireAll({ dirname: path.join(__dirname, '../data') });
    const data = dataSets[dataName];

    await Model.query().insert(data);
  } catch (error) {
    console.log(error);
  }

  app.shutdown();
};

insert();
