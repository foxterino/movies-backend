import Knex from 'knex';
import knexConfig from '../knexfile';
import movies from '../data/movies.json';
import comments from '../data/comments.json';
import { Model } from 'objection';
import { MovieModel } from '../models/MovieModel';
import { CommentModel } from '../models/CommentModel';

const knex = Knex(knexConfig[process.env.NODE_ENV]);
Model.knex(knex);

const initDatabase = async () => {
  try {
    await movies.reduce(async (moviesAcc, movie, index) => {
      const { id } = await MovieModel.createMovie(movie);
      const movieComments = comments[index];

      await movieComments.reduce(async (commentsAcc, comment) => {
        await CommentModel.createComment({ movie_id: id, ...comment });
      }, Promise.resolve());
    }, Promise.resolve());

    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
};

initDatabase();
