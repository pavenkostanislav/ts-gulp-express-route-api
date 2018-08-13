import { IContext } from '../../tools/context';
import { baseApiCall } from '../../tools/baseApiCall';
import { Request, Response } from 'express';
import { createContext } from '../../tools/createContext';
export type Call = (context: IContext, req: Request, res: Response) => Promise<any>;

export function registrationCall(method: Call): (req: Request, res: Response) => Promise<void> {
  return baseApiCall(async function (req: Request, res: Response): Promise<void> {
    const context = await createContext(req.user);
    context.log.debug('ApiCall', 'registrationCall', req.method, req.path);
    const result = await method(context, req, res);
    return result;
  });
}
