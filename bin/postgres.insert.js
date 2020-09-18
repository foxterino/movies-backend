import '../boot';
import movies from '../data/movies.json';
import comments from '../data/comments.json';
import { MovieModel } from '../models/MovieModel';
import { CommentModel } from '../models/CommentModel';

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
