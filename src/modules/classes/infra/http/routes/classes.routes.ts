import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ClassesController from '@modules/classes/infra/http/controllers/ClassesController';

const classesRouter = Router();

const classesController = new ClassesController();

classesRouter.use(ensureAuthenticated);

classesRouter.post('/', classesController.create);

export default classesRouter;
