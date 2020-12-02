exports.seed = knex =>
  knex('genres')
    .del()
    .then(() =>
      knex('genres').insert([
        {
          id: 1,
          movie_id: 1,
          name: 'Horror',
        },
        {
          id: 2,
          movie_id: 1,
          name: 'Thriller',
        },
        {
          id: 3,
          movie_id: 1,
          name: 'Action',
        },
        {
          id: 4,
          movie_id: 2,
          name: 'Drama',
        },
      ])
    );
