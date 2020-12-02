exports.up = knex =>
  knex.schema.createTable('genres', table => {
    table.increments('id').primary();

    table.text('name');
    table.timestamps(false, true);

    table
      .integer('movie_id')
      .unsigned()
      .references('movies.id')
      .onUpdate('cascade')
      .onDelete('cascade');
  });

exports.down = knex => knex.schema.dropTableIfExists('genres');
