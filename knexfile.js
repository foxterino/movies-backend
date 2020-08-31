const environment = process.env.NODE_ENV || 'development';

const path = require('path');
const config = require('./config/config')[environment];

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: config.database,
      user: config.user,
      password: config.password,
    },
    migrations: {
      directory: path.join(__dirname, '/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/seeds'),
    },
  },
};
