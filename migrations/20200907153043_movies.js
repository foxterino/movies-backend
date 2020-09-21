exports.up = knex =>
  knex.schema.createTable('movies', table => {
    table.increments('id').primary();

    table.string('title');
    table.integer('year');
    table.float('rating');
    table.string('producer');
    table.integer('budget');
    table.string('poster');
    table.specificType('actors', 'text[]');
    table.specificType('genres', 'text[]');
    table.timestamps(false, true);
  });

exports.down = knex => knex.schema.dropTableIfExists('movies');
