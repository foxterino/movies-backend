exports.up = knex =>
  knex.schema.table('movies', table => table.dropColumn('genres'));

exports.down = knex =>
  knex.schema.table('movies', table => table.specificType('genres', 'text[]'));
