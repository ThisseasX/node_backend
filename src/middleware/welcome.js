const welcome = () => async ctx => {
  if (!ctx._matchedRoute) {
    ctx.body = 'Welcome!';
  }
};

export default welcome;
