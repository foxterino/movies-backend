import movies from '../data/movies.json';
import genres from '../data/genres.json';
import comments from '../data/comments.json';
import { app } from '../boot';
import { Model } from 'objection';
import { MovieModel } from '../models/MovieModel';
import { GenreModel } from '../models/GenreModel';
import { CommentModel } from '../models/CommentModel';

const initDatabase = async () => {
  Model.knex(app.knex);

  try {
    await movies.reduce(async (moviesAcc, movie, index) => {
      const { id } = await MovieModel.createMovie(movie);
      const movieGenres = genres[index];
      const movieComments = comments[index];

      await movieGenres.reduce(async (genresAcc, genre) => {
        await GenreModel.createGenre({ movieId: id, ...genre });
      }, Promise.resolve());

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
