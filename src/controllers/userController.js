import Router from '@koa/router';
import { userService } from '../services';

const router = new Router({ prefix: '/users' });

const userController = router
  .get('/', userService.findAllUsers)
  .post('/', userService.saveUser);

export default userController;
