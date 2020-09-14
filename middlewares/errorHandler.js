export const errorHandler = () => async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    const status = error.status || 500;

    ctx.status = status;
    ctx.body = { code: status, message: error.message };

    ctx.app.emit('error', error, ctx);
  }
};
