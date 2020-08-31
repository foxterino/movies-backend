exports.seed = knex =>
  knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          id: 1,
          email: 'john@gmail.com',
          username: 'john',
          password: 'password1',
        },
        {
          id: 2,
          email: 'doe@gmail.com',
          username: 'doe',
          password: 'password2',
        },
        {
          id: 3,
          email: 'user@gmail.com',
          username: 'user',
          password: 'password3',
        },
      ])
    );
