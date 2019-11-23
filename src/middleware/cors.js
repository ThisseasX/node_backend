const cors = () => async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  await next();
};

export default cors;
