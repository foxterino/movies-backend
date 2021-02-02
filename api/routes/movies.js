import Router from 'koa-router';
import { movieSchema } from '../../validation';
import { isAuth } from '../../middlewares/isAuth';
import { MovieModel } from '../../models/MovieModel';
import { validate } from '../../middlewares/validate';

const route = new Router({ prefix: '/movies' });

export const moviesRouter = app => {
  route.get('/', async ctx => {
    try {
      const movies = await MovieModel.getAllMovies(ctx.query);

      ctx.status = 200;
      ctx.body = movies;
    } catch (error) {
      ctx.throw(400, 'Failed to fetch movies');
    }
  });

  route.post('/', validate(movieSchema), async ctx => {
    const movie = await MovieModel.createMovie(ctx.request.body);

    ctx.status = 200;
    ctx.body = movie;
  });

  route.get('/search', async ctx => {
    const movies = await MovieModel.findByTitle(ctx.query.title);

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

  app.use(isAuth(), route.routes(), route.allowedMethods());
};
