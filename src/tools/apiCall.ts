import { Request, Response } from 'express';
import { IContext } from './context';
import { baseApiCall } from './baseApiCall';
import { createContext } from './createContext';
import { config } from '../services/config';

export type Call = (context: IContext, req: Request, res: Response) => Promise<any>;

export function apiCall(method: Call): (request: Request, res: Response) => Promise<void> {
  return baseApiCall(async (req: any, res: Response) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send(config.auth.loginPage);
    }
    const user: any = req.user;
    const context = createContext(user);
    return await method(context, req, res);
  });
}
