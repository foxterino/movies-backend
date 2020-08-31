const path = require('path');
const config = require('./config')(process.env.NODE_ENV);

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
