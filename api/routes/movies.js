import Router from 'koa-router';
import { isAuth } from '../../middlewares/isAuth';
import { MovieModel } from '../../models/MovieModel';

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

  route.get('/search', async ctx => {
    const movies = await MovieModel.findMovies(ctx.query.title);

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
