import * as express from 'express';
import { apiMethods } from './api-methods';

const router = express.Router();
apiMethods(router);
export const apiRouter = router;

