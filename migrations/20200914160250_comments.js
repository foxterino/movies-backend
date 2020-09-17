exports.up = knex =>
  knex.schema.createTable('comments', table => {
    table.increments('id').primary();

    table.text('text');
    table.timestamps(false, true);

    table
      .integer('movie_id')
      .unsigned()
      .references('movies.id')
      .onUpdate('cascade')
      .onDelete('cascade');
  });

exports.down = knex => knex.schema.dropTableIfExists('comments');
