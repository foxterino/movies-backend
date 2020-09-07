const config = require('./config.js');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env = 'development') => config[env];
