import movies from '../data/movies.json';
import comments from '../data/comments.json';
import { app } from '../boot';
import { Model } from 'objection';
import { MovieModel } from '../models/MovieModel';
import { CommentModel } from '../models/CommentModel';

const initDatabase = async () => {
  Model.knex(app.knex);

  try {
    await movies.reduce(async (moviesAcc, movie, index) => {
      const { id } = await MovieModel.createMovie(movie);
      const movieComments = comments[index];

      await movieComments.reduce(async (commentsAcc, comment) => {
        await CommentModel.createComment({ movieId: id, ...comment });
      }, Promise.resolve());
    }, Promise.resolve());
  } catch (error) {
    console.log(error);
  }

  app.shutdown();
};

initDatabase();
