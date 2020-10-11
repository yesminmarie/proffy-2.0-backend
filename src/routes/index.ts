import { Router } from 'express';
import schedulesRouter from './schedules.routes';
import classesRouter from './classes.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/schedules', schedulesRouter);
routes.use('/classes', classesRouter);
routes.use('/users', usersRouter);

export default routes;
