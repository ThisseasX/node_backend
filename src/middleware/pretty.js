const pretty = () => async (ctx, next) => {
  if (ctx.query.pretty) {
    try {
      ctx.body = JSON.stringify(ctx.body, null, 2);
    } catch (err) {
      console.error(err);
    }
  }

  await next();
};

export default pretty;
