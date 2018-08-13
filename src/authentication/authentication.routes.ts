import { NextFunction, Request, Response, Router } from 'express';
import * as passport from 'passport';
import { config } from '../services/config';
import { apiCall } from '../tools/apiCall';
import { IContext } from '../tools/context';
import { authenticationApi } from './api/authentication.api';

async function loginRedirect(context: IContext, req: Request, res: Response): Promise<void> {
  const redirectUrl = await authenticationApi(context).getSignInRedirectUrl();
  context.log.info('Passport', req.originalUrl, 'redirect to', redirectUrl);
  const url = config.auth.clientHost + redirectUrl;
  res.status(301).redirect(url);
}

function addPassword(req: Request, res: Response, next: NextFunction): void {
  req.query.user = req.query.user || 'test@test.test';
  req.query.password = '1';
  next();
}

export function authenticationRoutes(router: Router): void {
  if (config.auth.backDoor) {
    router.get('/backdoor', addPassword, passport.authenticate('backdoor', { session: true }), apiCall(loginRedirect));
  }
}
