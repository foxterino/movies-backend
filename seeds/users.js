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
          created_at: '2020-09-01 16:43:13.461758+03',
          updated_at: '2020-09-01 16:43:13.461758+03',
        },
        {
          id: 2,
          email: 'doe@gmail.com',
          username: 'doe',
          password: 'password2',
          created_at: '2020-09-01 16:43:13.461758+03',
          updated_at: '2020-09-01 16:43:13.461758+03',
        },
        {
          id: 3,
          email: 'user@gmail.com',
          username: 'user',
          password: 'password3',
          created_at: '2020-09-01 16:43:13.461758+03',
          updated_at: '2020-09-01 16:43:13.461758+03',
        },
      ])
    );
