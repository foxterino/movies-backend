import Router from 'koa-router';
import { isAuth } from '../../middlewares/isAuth';
import { MovieModel } from '../../models/MovieModel';
import { CommentModel } from '../../models/CommentModel';
import { MoviesService } from '../../service/MoviesService';

const route = new Router({ prefix: '/movies' });

export const moviesRouter = app => {
  route.post('/', async ctx => {
    try {
      const movies = await MovieModel.getAllMovies(ctx.request.body);

      ctx.status = 200;
      ctx.body = movies;
    } catch (error) {
      ctx.throw(400, 'Failed to fetch movies');
    }
  });

  route.get('/search', async ctx => {
    const movies = await MoviesService.findMovies(ctx.query.title);

    ctx.status = 200;
    ctx.body = movies;
  });

  route.get('/:id', async ctx => {
    try {
      const movie = await MovieModel.findMovieById(ctx.params.id);

      ctx.status = 200;
      ctx.body = movie;
    } catch (error) {
      ctx.throw(404, 'Movie not found');
    }
  });

  route.post('/:id/comment', async ctx => {
    try {
      const movieId = parseInt(ctx.params.id, 10);
      const { text } = ctx.request.body;

      const comment = await CommentModel.createComment({ movieId, text });

      ctx.status = 200;
      ctx.body = comment;
    } catch (error) {
      ctx.throw(404, 'Failed to add comment');
    }
  });

  app.use(isAuth(), route.routes(), route.allowedMethods());
};
