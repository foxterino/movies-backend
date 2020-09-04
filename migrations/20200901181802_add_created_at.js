exports.up = knex =>
  knex.schema.table('users', table => {
    table.timestamps(false, true);

    table.unique('email');
    table.unique('username');
  });

exports.down = knex =>
  knex.schema.table('users', table => {
    table.dropTimestamps();

    table.dropUnique('username');
    table.dropUnique('email');
  });
