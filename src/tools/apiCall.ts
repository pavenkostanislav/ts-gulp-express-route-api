import { Request, Response } from 'express';
import { IContext } from './context';
import { baseApiCall } from './baseApiCall';
import { createContext } from './createContext';
import { config } from '../services/config';
import { logger } from './logger/logger';

export type Call = (context: IContext, req: Request, res: Response) => Promise<any>;

export function apiCall(method: Call): (request: Request, res: Response) => Promise<void> {
  return baseApiCall(async (req: any, res: Response) => {
    if (!req.isAuthenticated()) {
      logger.debug('Routing', 'redirecting user to sign page');
      return res.status(401).send(config.auth.loginPage);
    }
    const user: any = req.user;
    const context = createContext(user);
    context.log.debug('ApiCall', 'apiCall', req.method, req.path);
    return await method(context, req, res);
  });
}
