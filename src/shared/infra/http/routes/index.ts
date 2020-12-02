import { Router } from 'express';

import schedulesRouter from '@modules/schedules/infra/http/routes/schedules.routes';
import classesRouter from '@modules/classes/infra/http/routes/classes.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/session.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';

const routes = Router();

routes.use('/schedules', schedulesRouter);
routes.use('/classes', classesRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);

export default routes;
