import { isAuth } from '../../middlewares/isAuth';
import { CommentModel } from '../../models/CommentModel';

const Router = require('koa-router');

const route = new Router({ prefix: '/comments' });

export const commentsRouter = app => {
  route.post('/:id', async ctx => {
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
