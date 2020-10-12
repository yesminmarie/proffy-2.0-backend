import { Router } from 'express';
import schedulesRouter from './schedules.routes';
import classesRouter from './classes.routes';
import usersRouter from './users.routes';
import sessionsRouter from './session.routes';

const routes = Router();

routes.use('/schedules', schedulesRouter);
routes.use('/classes', classesRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
