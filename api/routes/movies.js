import Router from 'koa-router';
import { isAuth } from '../../middlewares/isAuth';
import { MovieModel } from '../../models/MovieModel';
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

  app.use(isAuth(), route.routes(), route.allowedMethods());
};
