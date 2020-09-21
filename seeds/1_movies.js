exports.seed = knex =>
  knex('movies')
    .del()
    .then(() =>
      knex('movies').insert([
        {
          id: 1,
          title: '127 Hours',
          year: 2010,
          rating: 7.2,
          producer: 'Malia Crux',
          budget: 753605,
          poster: 'http://dummyimage.com/600x900.jpg/cc0000/ffffff',
          actors: [
            'James Franco',
            'Amber Tamblyn',
            'Kate Mara',
            'Clémence Poésy',
            'Lizzy Caplan',
          ],
          genres: ['Biography', 'Drama'],
        },
        {
          id: 2,
          title: 'The Abandoned',
          year: 2010,
          rating: 8.5,
          producer: 'Tally Erb',
          budget: 729092,
          poster: 'http://dummyimage.com/600x900.jpg/cc0000/ffffff',
          actors: ['Mira Furlan', 'Tony Grga'],
          genres: ['Drama'],
        },
      ])
    );
