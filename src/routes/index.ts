import { Router } from 'express';
import schedulesRouter from './schedules.routes';

const routes = Router();

routes.use('/schedules', schedulesRouter);

export default routes;
