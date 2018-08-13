import * as express from 'express';
import { apiMethods } from './api-methods';
import { authenticationRoutes } from '../authentication/authentication.routes';

const router = express.Router();
authenticationRoutes(router);
apiMethods(router);
export const apiRouter = router;

