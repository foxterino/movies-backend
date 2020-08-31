const config = require('./config.js');

module.exports = (env = 'development') => config[env];
