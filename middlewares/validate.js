export const validate = schema => async (ctx, next) => {
  try {
    await schema.validateAsync(ctx.request.body);

    await next(ctx);
  } catch (error) {
    ctx.throw(400, { errors: error.details });
  }
};
