const path = require('path');

module.exports = {
  development: {
    client: '',
    connection: {
      database: '',
      user: '',
      password: '',
    },
    migrations: {
      directory: path.join(__dirname, '../migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '../seeds'),
    },
    jwtSecret: '',
  },
};
