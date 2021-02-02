export const errorHandler = () => async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    const { status = 500, message, errors } = error;

    ctx.status = status;
    ctx.body = { code: status, message, errors };

    ctx.app.emit('error', error, ctx);
  }
};
