import { Request, Response } from 'express';

export type Call = (req: Request, res: Response) => Promise<any>;

export function baseApiCall(method: Call): (req: Request, res: Response) => Promise<void> {
  return async function (req: Request, res: Response): Promise<void> {
    try {
      const result = await method(req, res);
      if (!res.headersSent) {
        res.status(200).json(result);
      }
    } catch (err) {
      res.status(err.code || 500).send(err.message);
    }
  };
}
