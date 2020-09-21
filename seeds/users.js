exports.seed = knex =>
  knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          email: 'john@gmail.com',
          username: 'john',
          password: 'password1',
        },
        {
          email: 'doe@gmail.com',
          username: 'doe',
          password: 'password2',
        },
        {
          email: 'user@gmail.com',
          username: 'user',
          password: 'password3',
        },
      ])
    );
