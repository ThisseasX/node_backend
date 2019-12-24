import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import rootController from './controllers';
import { pretty, cors, welcome } from './middleware';

const app = new Koa();

app
  .use(cors())
  .use(bodyParser())
  .use(rootController.routes())
  .use(rootController.allowedMethods())
  .use(pretty())
  .use(welcome())
  .listen(process.env.PORT || 3000, function() {
    console.log(`Server listening on port: ${this.address().port}`);
  });
