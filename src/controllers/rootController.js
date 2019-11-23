import Router from '@koa/router';
import userController from './userController';

const rootController = new Router();

rootController
  .use(userController.routes());

export default rootController;
