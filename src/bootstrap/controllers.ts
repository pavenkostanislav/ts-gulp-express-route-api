import { Express } from 'express';
import { apiRouter } from '../controllers/api-router';

export function Controllers(app: Express): void {
  app.use('/api', apiRouter);
}
