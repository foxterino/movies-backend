exports.seed = knex =>
  knex('comments')
    .del()
    .then(() =>
      knex('comments').insert([
        {
          movie_id: 1,
          text: 'Pellentesque viverra pede ac diam.',
        },
        {
          movie_id: 2,
          text: 'Aliquam quis turpis eget elit sodales scelerisque.',
        },
        {
          movie_id: 2,
          text:
            'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        },
      ])
    );
