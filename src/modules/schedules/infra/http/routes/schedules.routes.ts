import { Router } from 'express';

import SchedulesController from '@modules/schedules/infra/http/controllers/SchedulesController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const schedulesRouter = Router();

schedulesRouter.use(ensureAuthenticated);

const schedulesController = new SchedulesController();

schedulesRouter.post('/', schedulesController.create);

export default schedulesRouter;
