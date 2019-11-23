import { userDao } from '../dao';

const findAllUsers = async (ctx, next) => {
  try {
    ctx.body = await userDao.findAllUsers();
  } catch (err) {
    console.error(err);
  }

  await next();
};

const saveUser = async (ctx, next) => {
  try {
    const result = await userDao.saveUser(ctx.request.body);
    ctx.body = result.insertId;
  } catch (err) {
    console.error(err);
  }

  await next();
};

export { findAllUsers, saveUser };
